const asyncHandler = require('express-async-handler')
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const {User, Company, Token} = require('../models')
const {tokenGenerator, nodemailer} = require('../utils')

const resendEmailToUnverifiedUser = asyncHandler(async (res, user) => {
    // --- destroy old token and assign a new one
    await Token.destroy({where: {user_id: user.id, action: 'email-verification'}})
    // await Token.save()

    // verification code
    const verificationCode = crypto.randomBytes(20).toString("hex")
    const newToken = await Token.create({
        user_id: user.id,
        token: verificationCode,
        action: 'email-verification',
        expires: Date.now() + 3 * 60 * 60 * 1000 // 3 hours
    })

    // send email
    await nodemailer.sendVerificationEmail(
        user.first_name,
        user.email,
        newToken.token
    )

    res.status(201).json({
        emailVerificationMessage:
            "Verification email sent to your inbox. Check your email to verify your account ",
    })
})

// @ desc ---- Google Authentication (Signup/Signin)
// route  --POST-- [base_api]/auth/google
const googleAuth = asyncHandler(async (req, res) => {
    const {email, first_name, last_name} = req.body;
    const userName = `${first_name} ${last_name}`;

    // check the user with the given Google email
    const existingUser = await User.findOne({where: {email}});
    if (existingUser && existingUser.auth_source === 'google') {
        // User exists --> signin
        const {accessToken} = await tokenGenerator(res, existingUser.id, userName, existingUser.email, existingUser.role);
        res.status(201).json({
            userName: userName,
            accessToken: accessToken
        });
    } else {
        if (existingUser && existingUser.auth_source !== 'google') {
            res.status(400)
            throw new Error('This email was not registered via google. Use email and password to login')
        }
        // res.status(409)
        // throw new Error('Email already registered. Use another email')
    }

    // user does not exist --> signup
    const newUser = await User.create({
        first_name,
        last_name,
        email,
        auth_source: 'google',
        verified: true,
    });

    if (!newUser) {
        res.status(500);
        throw new Error('Failed to signup with Google. Try again later');
    }

    // signin the new user
    const {accessToken} = await tokenGenerator(res, newUser.id, userName, newUser.email, newUser.role);

    res.status(201).json({
        userName: userName,
        accessToken: accessToken
    });
});

// @ desc --- Register new user
// route  --POST-- [base_api]/auth/signup
const signUp = asyncHandler(async (req, res) => {
    const {first_name, last_name, email, password, role, auth_source} = req.body;
    const {company_name, registration_number, company_logo} = req.body;

    const userExists = await User.findOne({where: {email}});
    if (userExists) {
        res.status(409);
        throw new Error("This EMAIL is already in use. Use another email");
    }

    const newUser = await User.create({
        first_name,
        last_name,
        email,
        password,
        role,
        auth_source,
        verified: auth_source === 'google'
    });
    if (!newUser) {
        res.status(500)
        throw new Error('Failed to register user. Try again later')
    }

    // -- send verification email -- //
    // generating verification code
    const newToken = await Token.create({
        user_id: newUser.id,
        token: crypto.randomBytes(20).toString("hex"),
        action: 'email-verification',
        expires: Date.now() + 2 * 60 * 60 * 1000 // 2 hours
    })

    // send email
    await nodemailer.sendVerificationEmail(
        newUser.first_name,
        newUser.email,
        newToken.token
    )

    // register users company
    if (role === 'employer') {
        await Company.create({
            company_name,
            registration_number,
            company_logo,
            employer_id: newUser.id
        })
    }

    res.status(201).json({
        message:
            "Registered Successfully. Check your email to verify your account ",
    })
})

// @desc ---- Verify email
// route --POST-- [base_api]/auth/:userId/verify-email/:confirmationCode
const verifyEmail = asyncHandler(async (req, res) => {
    const {verificationCode} = req.params

    const token = await Token.findOne({where: {token: verificationCode}})

    if (!token) {
        res.status(404);
        throw new Error("Invalid/Expired link!");
    }
    const user = await User.findByPk(token.user_id);
    user.verified = true
    const verifiedUser = await user.save()
    const removeToken = await token.destroy()

    if (verifiedUser && removeToken) {
        const userName = `${user.first_name} ${user.last_name}`;
        const {accessToken, refreshToken} = await tokenGenerator(
            res,
            user.id,
            userName,
            user.email,
            user.role
        );

        const userData = {
            userName,
            email: user.email,
            role: user.role
        }
        return res.status(200)
            .json({
                message: "Email verified successfully",
                user: userData,
                accessToken,
                refreshToken
            })
    } else {
        res.status(500);
        throw new Error("Server Error occurred when verifying user. Try again later");
    }
})

// @ desc ---- User Login -> set tokens
// route  --POST-- [base_api]/auth/signIn
const signIn = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({where: {email}});

    if (!user) {
        res.status(404);
        throw new Error("Invalid credentials");
    }

    if (user.auth_source !== 'self') {
        res.status(400);
        throw new Error(`This email was registered via ${user.auth_source}. To login, use ${user.auth_source}`);
    }

    // -- resend verification email if user is !verified
    if (!user.verified) {
        return resendEmailToUnverifiedUser(res, user)
    }

    // compare password
    if (await user.matchPassword(password)) {
        const userName = `${user.first_name} ${user.last_name}`;
        const {accessToken, refreshToken} = await tokenGenerator(
            res,
            user.id,
            userName,
            user.email,
            user.role
        );

        const userData = {
            userName,
            userId: user.id,
            email: user.email,
            role: user.role
        }
        return res.status(200).json({
            user: userData,
            accessToken: accessToken,
            refreshToken: refreshToken
        });
    } else {
        res.status(401);
        throw new Error("Invalid Credentials");
    }
});

// @ desc ---- Logout user -> destroy cookies
// route  --POST-- [base_api]/auth/sign-out
const signOut = asyncHandler(async (req, res) => {
    console.log(req.user)
    res.status(200).json({message: "Logged Out"});
});

// @ desc ---- Refresh Access Token
// route  --POST-- [base_api]/auth/refresh
const refresh = asyncHandler(async (req, res) => {
    const authHeader = req.header('authorization-refresh-token')
    const refreshToken = authHeader && authHeader.split(' ')[1]
    const {userId} = req.user

    const user = await User.findByPk(+(userId));
    if (!user) {
        res.status(404);
        throw new Error("Unknown User");
    }

    const userName = `${user.first_name} ${user.last_name}`;
   // generate new access token only
    const {accessToken} = await tokenGenerator(
        res,
        user.id,
        userName,
        user.email,
        user.role
    );

    const userData = {
        userName,
        userId: user.id,
        email: user.email,
        role: user.role
    }

    return res.status(200).json({
        user: userData,
        accessToken: accessToken,
        refreshToken: refreshToken // refresh not expired -> send same refresh token back
    });
});

// @desc ---- Forgot Password
// route --POST-- [base_api]/auth/forgot-password
const forgotPassword = asyncHandler(async (req, res) => {
    const {email} = req.body;

    const user = await User.findOne({where: {email}});

    if (!user) {
        res.status(404);
        throw new Error("User not found");
    } else {
        // -- resend verification email if user is !verified
        if (!user.verified) {
            return resendEmailToUnverifiedUser(user)
        }

        // --- destroy any existing token and assign a new one
        await Token.destroy({where: {user_id: user.id, action: 'password-reset'}})

        // verification code
        const verificationCode = crypto.randomBytes(20).toString("hex")
        const newToken = await Token.create({
            user_id: user.id,
            token: verificationCode,
            action: 'password-reset',
            expires: Date.now() + 3 * 60 * 60 * 1000 // 3 hours
        })

        // send email
        await nodemailer.sendResetPassword(
            user.first_name,
            user.email,
            newToken.token
        )
        res.status(201).json({
            passwordResetMessage:
                "A password reset email has been sent to your inbox. Check your email to reset your password ",
        })
    }
})

// @desc ---- Reset Password
// route --PUT-- [base_api]/auth/reset-password/:resetToken
const resetPassword = asyncHandler(async (req, res) => {
    const {password, confirm_password} = req.body;
    const {resetToken} = req.params;

    if (password !== confirm_password) {
        res.status(400);
        throw new Error("Passwords do not match");
    }

    const token = await Token.findOne({
        where: {
            action: 'password-reset',
            token: resetToken,
        },
    });


    if (!token) {
        res.status(400);
        throw new Error("Password reset link is invalid or has expired.");
    } else {
        const user = await User.findByPk(token.user_id);

        const hashedPassword = await bcrypt.hash(password, 10)
        user.password = hashedPassword
        const updatedUser = await user.save()
        const removeToken = await token.destroy()

        if (!updatedUser || !removeToken) {
            res.status(500);
            throw new Error("Server Error occurred when updating user. Try again later");
        }

        res.status(200).json({message: "Your password has been reset"});
    }
});

module.exports = {
    googleAuth,
    signUp,
    verifyEmail,
    signIn,
    signOut,
    refresh,
    forgotPassword,
    resetPassword,
}
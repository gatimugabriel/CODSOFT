const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const {User, Company, Token} = require("../models");
const {cloudinaryUtil, tokenGenerator} = require("../utils");


// ---- Get user profile
const getUserProfile = asyncHandler(async (req, res) => {
    const {userId} = req.user;
    const user = await User.findByPk(userId, {
        attributes: {
            exclude: [
                "password"
            ]
        },
        include: [{
            model: Company,
            attributes: ['company_name', 'registration_number', 'company_logo']
        }]
    })

    if (!user) {
        res.status(404)
        throw new Error('User not found')
    }
    res.status(200).json(user);
});

// ---- Update user profile
const updateUserProfile = asyncHandler(async (req, res) => {
    const {userId} = req.user;
    const {first_name, last_name, email, password, company, companyLogo, registration_number} = req.body
    let logo
    if (req.files) {
        logo = req.files.logo
    }

    const user = await User.findByPk(userId);
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }

    if (email && (email !== user.email)) {
        const existingEmail = await User.findOne({where: {email}})
        if (existingEmail) {
            res.status(409)
            throw new Error('Such EMAIL is already in use. Use another one')
        }
    }

    let companyExists
    if (user.role === 'employer') {
        companyExists = await Company.findOne({
            where: {employer_id: user.id}
        })

        if (logo) {
            // upload image to CDN
            await cloudinaryUtil.cloudinary.uploader.upload(logo.tempFilePath, {
                public_id: `companyLogo_${Date.now()}`,
                resource_type: "image",
                folder: `${user.id}/company/`
            }).then(async data => {
                // update company logo
                companyExists.company_logo = data.secure_url || companyExists.company_logo
            }).catch(error => {
                console.log(error)
                res.status(500)
                throw new Error('Failed to upload file to server')
            })
        }
        // update other company details
        companyExists.company_name = company || companyExists.company_name
        companyExists.registration_number = registration_number || companyExists.registration_number
        await companyExists.save()
    }

    // update user details
    user.first_name = first_name || user.first_name;
    user.last_name = last_name || user.last_name;
    user.email = email || user.email;
    if (password) {
        user.password = await bcrypt.hash(password, 10);
    }
    const updatedUser = await user.save();

    // generate new access tokens for updated user
    const userName = `${user.first_name} ${user.last_name}`;
    const {
        accessToken, refreshToken
    } = await tokenGenerator(res, user.id, userName, user.email, user.role);

    // destroy old refresh token
    await Token.destroy({
        where: {user_id: user.id, action: 'auth'}
    })

    // save the new refresh token
    await Token.create({
        user_id: user.id,
        token: refreshToken,
        action: 'auth'
    })

    // const updatedCompanyData = {
    //     companyName: companyExists.company_name,
    //     companyLogo: companyExists.company_logo,
    //     registrationNumber: companyExists.registration_number
    // };

    const updatedUserData = {
        userName,
        userId: user.id,
        email: user.email,
        role: user.role,
        company: [companyExists]
    }

    res.status(200).json({
        success: true,
        message: "Profile Updated Successfully",
        user: updatedUserData,
        accessToken: accessToken
    })

});

// ---- Delete user profile
const deleteUserProfile = asyncHandler(async (req, res) => {
    const {userId} = req.user;
    const user = await User.findByPk(userId);

    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }

    const deletedUser = await user.destroy();

    if (deletedUser) {
        res.status(200).json({message: "Profile deleted successfully"});
    } else {
        res.status(500);
        throw new Error("Failed to delete user profile");
    }
});


// --- SUPER USER ROUTE
const getAllProfiles = asyncHandler(async (req, res) => {
    const users = await User.findAll()
    if (!users) {
        res.status(500);
        throw new Error("Error occurred when fetching users");
    }
    res.status(200).send(users);

})
module.exports = {
    getUserProfile,
    updateUserProfile,
    deleteUserProfile,
    getAllProfiles
}
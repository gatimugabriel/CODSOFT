const nodemailer = require('nodemailer')
const {mailConfig} = require("../config");
require("dotenv").config();

// -- transport config -- //
const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const sendVerificationEmail = async (userName, email, token) => {
    const mailOptions = {
        from: mailConfig.EMAIL_SENDER,
        to: email,
        subject: "Email Verification",
        html: `
        <div>
        <h1>Please Confirm your Account</h1>
        <h2>Hello ${userName}</h2>
        <p>Thank you for joining Job Board. Confirm your email by clicking on the following link</p>
        <a href=${process.env.PRODUCTION_ORIGIN}/verify-email/${token}> Click here to verify your account</a>
        </div>
        `
    }

    try {
        const info = await transport.sendMail(mailOptions)
        return info
    } catch (error) {
        console.log('error occurred', error)
        throw new Error('Failed to send verification email. Try again later')
    }
}

const sendResetPassword = async (userName, email, token) => {
    const mailOptions = {
        from: mailConfig.EMAIL_SENDER,
        to: email,
        subject: "Password Reset Request ",
        html: `
        <div>
        <h1>Reset your Job-Board Account Password</h1>
        <h2>Hello ${userName}</h2>
        <p>
        You are receiving this email because you (or someone else) has requested a password reset for your Job Board account.\nConfirm by clicking on the following link</p>\n
        <a href=${process.env.PRODUCTION_ORIGIN}/reset-password/${token}> Click here to reset your password</a>\n
           If you did not request this, please ignore this email and your password will remain unchanged.
        </div>
        `
    }
    
    try {
        const info = await transport.sendMail(mailOptions)
        return info
    } catch (error) {
        throw new Error('Failed to send password reset link. Try again later')
    }
}

module.exports = {sendVerificationEmail, sendResetPassword};

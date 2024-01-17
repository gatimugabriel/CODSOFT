const router = require('express').Router()
const {authController} = require("../controllers");
const {authMiddleware, inputValidation} = require('../middleware')

router.post('/google', authController.googleAuth)
router.post('/signup',
    [
        inputValidation.signupInputs,
        inputValidation.passwordInput,
        inputValidation.validate
    ],
    authController.signUp)
router.post('/verify-email/:verificationCode', authController.verifyEmail)
router.post('/signin', authController.signIn)
router.post('/sign-out', [authMiddleware.verifyToken], authController.signOut)
router.get('/refresh', authMiddleware.verifyRefreshToken, authController.refresh)

// -- password reset
router.post('/forgot-password', authController.forgotPassword)
router.put('/reset-password/:resetToken', authController.resetPassword)

module.exports = router
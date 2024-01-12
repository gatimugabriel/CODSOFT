const errorMiddleware = require('./error.middleware.js')
const authMiddleware = require('./auth.middleware')
const inputValidation = require('./validateInputs.middleware')

module.exports = {
    errorMiddleware,
    authMiddleware,
    inputValidation
}
const router = require("express").Router();
const {authMiddleware} = require('../middleware')
const {userController} = require('../controllers')

// all routes here require authentication
router.use(authMiddleware.verifyToken)

router
    .route("/profile")
    .get(userController.getUserProfile)
    .put(userController.updateUserProfile)
    .delete(userController.deleteUserProfile);

router.get('/profile/all', authMiddleware.requireSuperUser, userController.getAllProfiles)

module.exports = router;
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const {User, Company} = require("../models");

// ---- Get user profile
const getUserProfile = asyncHandler(async (req, res) => {
    const userId = req.user.userId;
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

    if (!user){
        res.status(404)
        throw new Error('User not found')
    }
    res.status(200).json(user);
});

// ---- Update user profile
const updateUserProfile = asyncHandler(async (req, res) => {
    const userId = req.user.userId;
    const {first_name, last_name, email, password} = req.body
    const user = await User.findByPk(userId);

    if (user) {
        if(email && (email !== user.email)){
            const existingEmail = await User.findOne({where: {email}})
            if (existingEmail){
                res.status(409)
                throw new Error('Such EMAIL is already in use. Use another one')
            }
        }
        user.first_name = first_name || user.first_name;
        user.last_name = last_name || user.last_name;
        user.email = email || user.email;
        if (password) {
            user.password = await bcrypt.hash(password, 10);
        }

        const updatedUser = await user.save();
        res.status(200).json({
            success: true,
            message: "Profile Updated Successfully",
            details: updatedUser
        })
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});

// ---- Delete user profile
const deleteUserProfile = asyncHandler(async (req, res) => {
    const userId = req.user.userId;
    const user = await User.findByPk(+userId);

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
const getAllProfiles = asyncHandler(async  (req, res) => {
    const users = await User.findAll()
    if (!users){
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
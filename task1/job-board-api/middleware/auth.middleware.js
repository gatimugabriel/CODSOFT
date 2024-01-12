const JWT = require("jsonwebtoken");
const asyncHandler = require('express-async-handler')
const {User} = require('../models')

const verifyToken = asyncHandler(async (req, res, next) => {
    const authHeader = req.header('authorization-access-token')
    const access_token = authHeader && authHeader.split(' ')[1]

    if (!access_token) {
        return res.status(403).json({
            success: false,
            message: "Missing Access Token",
        });
    }

    await JWT.verify(
        access_token,
        process.env["JWT_SECRET_ACCESS_TOKEN"],
        (err, decoded) => {
            if (err) {
                if (err.name === 'TokenExpiredError') {
                    res.status(401)
                    throw new Error("Expired Access Token")
                } else {
                    res.status(401);
                    throw new Error("Invalid Access token");
                }
            }

            req.user = decoded;
            next();
        }
    );
})

const verifyRefreshToken = asyncHandler(async (req, res, next) => {
    const authHeader = req.header('authorization-refresh-token')
    const refresh_token = authHeader && authHeader.split(' ')[1]

    if (!refresh_token) {
        return res.status(403).json({
            success: false,
            message: "Missing Refresh Token",
        });
    }

    await JWT.verify(
        refresh_token,
        process.env["JWT_SECRET_REFRESH_TOKEN"],
        (err, decoded) => {
            if (err) {
                if (err.name === 'TokenExpiredError') {
                    res.status(401)
                    throw new Error("Expired Refresh Token")
                } else {
                    res.status(401);
                    throw new Error("Invalid Refresh token");
                }
            }

            req.user = decoded;
            next();
        }
    );
})

const requireEmployer = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({where: {id: req.user.userId}});

    if (!user) {
        req.status(404);
        throw new Error("Unknown User!");
    } else {
        if (user.role !== 'employer') {
            res.status(403);
            throw new Error(
                "Forbidden! You must be an Employer to complete the action"
            );
        }
    }
    next();
})

const requireCandidate = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({where: {id: req.user.userId}});

    if (!user) {
        req.status(404);
        throw new Error("Unknown User!");
    } else {
        if (user.role !== 'candidate') {
            res.status(403);
            throw new Error(
                "Forbidden! You must be Candidate to complete the action"
            );
        }
    }
    next();
})

const authMiddleware = {
    verifyToken,
    verifyRefreshToken,
    requireEmployer,
    requireCandidate
};
module.exports = authMiddleware;
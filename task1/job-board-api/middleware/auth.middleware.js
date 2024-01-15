const JWT = require("jsonwebtoken");
const asyncHandler = require('express-async-handler')
const {User, Token} = require('../models')

const verifyToken = asyncHandler(async (req, res, next) => {
    const authHeader = req.header('Authorization')
    const accessToken = authHeader && authHeader.split(' ')[1]

    if (!accessToken) {
        return res.status(403).json({
            success: false,
            message: "Missing Access Token",
        });
    }

    await JWT.verify(
        accessToken,
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
    const userId = req.header('UID')
    const refreshToken = await Token.findOne({where: {user_id: userId, action: 'auth'}})

    if (!refreshToken) {
        return res.status(403).json({
            success: false,
            message: "Missing Refresh Token",
        });
    }

    await JWT.verify(
        refreshToken.token,
        process.env["JWT_SECRET_REFRESH_TOKEN"],
        (err, decoded) => {
            if (err) {
                console.log('refresh error >>>',err)
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

// const requireRole = asyncHandler(async (req, res, next, requiredRole) => {
//     const userId = req.user.userId
//     const user = await User.findByPk(+userId);
//
//     console.log(requiredRole)
//     console.log(user)

//     if (!user) {
//         req.status(404);
//         throw new Error("Unknown User!");
//     } else {
//         if (user.role !== requiredRole) {
//             res.status(403);
//             throw new Error(
//                 `Forbidden! You must be ${requiredRole} to complete the action`
//             );
//         }
//     }
//     next();
// })

const requireEmployer = asyncHandler(async (req, res, next) => {
    const userId = req.user.userId
    const user = await User.findByPk(+userId);

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
    const userId = req.user.userId
    const user = await User.findByPk(+userId);

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

const requireSuperUser = asyncHandler(async (req, res, next) => {
    const userId = req.user.userId
    const user = await User.findByPk(+userId);

    if (!user) {
        req.status(404);
        throw new Error("Unknown User!");
    } else {
        if (user.role !== 'superUser') {
            res.status(403);
            throw new Error(
                "Forbidden! You must be an Admin to complete the action"
            );
        }
    }
    next();
})

const authMiddleware = {
    verifyToken,
    verifyRefreshToken,
    requireEmployer,
    requireCandidate,
    requireSuperUser
};
module.exports = authMiddleware;
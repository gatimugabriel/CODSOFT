const {check, validationResult} = require("express-validator");

const signupInputs = [
    check("first_name", "first_name is required").not().isEmpty(),
    check("last_name", "last_name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("role", "role is required").not().isEmpty(),
]

const passwordInput = [
    check("password", "Password is required")
        .not().isEmpty()
        .isLength({min: 6})
        .withMessage("Password should be at least 6 characters long")
        .isStrongPassword()
        .withMessage(
            "Password should have both uppercase and lowercase letters, numbers, and special characters"
        ),
];

const jobInputs = [
    check("title", "Job title is required").not().isEmpty(),
    check("category", "Category is required").not().isEmpty(),
    check("company", "Company is required").not().isEmpty(),
    check("companyLogo", "Company logo is required").not().isEmpty(),
    check("location", "Location is required").not().isEmpty(),
    check("type", "Type is required").not().isEmpty(),
    check("experience", "Experience is required").not().isEmpty(),
    check("description", "Description is required").not().isEmpty(),
    check("skills", "Skills are required").isArray({ min: 1 }).withMessage("At least one skill is required"),
    check("salary", "Salary is required").not().isEmpty(),
]

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }
    next();
};

const inputValidationMiddleware = {
    signupInputs, passwordInput, jobInputs , validate
}

module.exports = inputValidationMiddleware
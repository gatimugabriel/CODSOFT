const bcrypt = require('bcrypt')

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            // allowNull: true
        },
        role: {
            type: Sequelize.ENUM('employer', 'candidate', 'superUser'),
            defaultValue: 'candidate',
        },
        verified: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        auth_source: {
            type: Sequelize.ENUM('self', 'google', 'apple', 'meta', 'github'),
            defaultValue: 'self',
            allowNull: false
        }
    }, {
        freezeTableName: true,
        timestamps: true,
        hooks: {
            // -- hashing password (if exists -> google auth users do not need to enter password) before saving user
            beforeCreate: async (user) => {
                if (user.password) {
                    const salt = await bcrypt.genSalt(10);
                    user.password = await bcrypt.hash(user.password, salt);
                }
            }
        }
    })

    // --  matchPassword prototype method
    User.prototype.matchPassword = async function (inputPassword) {
        return await bcrypt.compare(inputPassword, this.password);
    };

    return { User }
}
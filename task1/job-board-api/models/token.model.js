module.exports = (sequelize, Sequelize) => {
    const Token = sequelize.define("tokens", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "id"
            }
        },
        token: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        action :{
            type: Sequelize.ENUM('auth', 'email-verification', 'password-reset'),
            defaultValue: 'auth'
        },
        expires: {
            type: Sequelize.DATE,
            allowNull: true,
        }
    }, {
        freezeTableName: true,
        timestamps: true
    })

    return {Token}
}
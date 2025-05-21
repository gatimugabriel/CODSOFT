module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define("companies", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            employer_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
                references: {
                    model: "users",
                    key: "id"
                }
            },
            company_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            registration_number: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            company_logo: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            }
        },
        {
            freezeTableName: true,
            timestamps: false,
        });

    return {Company};
};
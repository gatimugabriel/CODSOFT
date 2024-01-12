module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define("companies", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
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
            },
            employer_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "users",
                    key: "id"
                }
            }
        },
        {
            freezeTableName: true,
            timestamps: true,
        });

    return {Company};
};

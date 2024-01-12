module.exports = (sequelize, Sequelize) => {
    const JobApplication = sequelize.define("applications", {
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
        job_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "jobs",
                key: "id"
            }
        },
        resumePath: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        timestamps: true,
        uniqueKeys: {
            unique_user_job: {
                fields: ['user_id', 'job_id']
            }
        }
    });

    return {JobApplication};
};

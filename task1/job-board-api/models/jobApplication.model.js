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
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        contactEmail: {
            type: Sequelize.STRING,
            allowNull: false
        },
        contactPhone: {
            type: Sequelize.STRING,
            allowNull: false
        },
        linkedInProfile: {
            type: Sequelize.STRING,
            allowNull: false
        },
        essay: {
            type: Sequelize.STRING,
            allowNull: false
        },
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
module.exports = (sequelize, Sequelize) => {
    const Job = sequelize.define("jobs", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: Sequelize.STRING,
            unique: false,
            allowNull: false
        },
        category: {
            type: Sequelize.STRING,
            allowNull: false
        },
        company: {
            type: Sequelize.STRING,
            unique: false,
            allowNull: false
        },
        companyLogo: {
            type: Sequelize.STRING,
            allowNull: false,
            // references: {
            //     model: "companies",
            //     key: "company_logo"
            // }
        },
        location: {
            type: Sequelize.STRING,
            unique: false,
            allowNull: false
        },
        type: {
            type: Sequelize.ENUM(
                'Full-time', 'Part-time', 'Contract'),
            defaultValue: 'Full-time',
            allowNull: false,
        },
        experience: {
            type: Sequelize.STRING,
            unique: false,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            unique: false,
            allowNull: false
        },
        skills: {
            type: Sequelize.ARRAY(Sequelize.STRING),
            allowNull: false
        },
        salary: {
            type: Sequelize.STRING,
            unique: false,
            allowNull: false
        },
        employer_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: "users",
                key: "id"
            }
        }
    },
        {
            freezeTableName: true,
            timestamps: true,
            uniqueKeys: {
                unique_employer_job: {
                    fields: ['title', 'company']
                }
            }
        }
    )

    return { Job }
}
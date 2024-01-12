module.exports = (sequelize, Sequelize) => {
    const Bookmark = sequelize.define("bookmarks", {
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
    }, {
        freezeTableName: true,
        timestamps: true
    });

    return {Bookmark};
};

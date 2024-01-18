const {Sequelize} = require('sequelize')
const {dbConfig} = require('../config')

let sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        dialect: dbConfig.dialect,
        host: dbConfig.HOST,
        pool: dbConfig.pool,
        operatorsAliases: 0,
        ssl: true
    }
)

const db = {}

// adding sequelize to db object
db.Sequelize = Sequelize
db.sequelize = sequelize

// -- models -- //
const {User} = require('./user.model')(sequelize, Sequelize)
const {Job} = require('./job.model')(sequelize, Sequelize)
const {Company} = require('./company.model')(sequelize, Sequelize)
const {Token} = require('./token.model')(sequelize, Sequelize)
const {Bookmark} = require('./bookmark.model')(sequelize, Sequelize)
const {JobApplication} = require('./jobApplication.model')(sequelize, Sequelize)

// -- associations -- /
//-- USER
// user(employer) <-> job
User.hasMany(Job, {foreignKey: 'employer_id'})
Job.belongsTo(User, {foreignKey: 'employer_id'})

// user(employer) <-> company
User.hasMany(Company, {foreignKey: 'employer_id'})
Company.belongsTo(User, {foreignKey: 'employer_id'})

//-- BOOKMARKS
// user <-> bookmark
User.hasMany(Bookmark, {foreignKey: 'user_id'})
Bookmark.belongsTo(User, {foreignKey: 'user_id'})

// job <-> bookmark
Job.hasMany(Bookmark, {foreignKey: 'job_id'})
Bookmark.belongsTo(Job, {foreignKey: 'job_id'})

//-- APPLICATIONS
// user <-> job application
User.hasMany(JobApplication, {foreignKey: 'user_id'});
JobApplication.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// job <-> job application
Job.hasMany(JobApplication, {foreignKey: 'job_id'});
JobApplication.belongsTo(Job, {
    foreignKey: 'job_id',
    onDelete: 'CASCADE',
});

// job <-> company
// Company.hasMany(Job, {
//     foreignKey: 'employer_id',
//     onUpdate: 'CASCADE',
//     onDelete: 'CASCADE'
// });
// Job.belongsTo(Company, {
//     foreignKey: 'employer_id',
//     targetKey: 'employer_id', as: 'employer',
//     onUpdate: 'CASCADE'
// });

Object.assign(db, {User, Job, Company, Token, Bookmark, JobApplication})

module.exports = db
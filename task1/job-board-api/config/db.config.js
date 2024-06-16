dbConfig = {
    HOST: process.env['HOST'],
    USER: process.env['DB_USER'],
    PASSWORD: process.env['DB_USER_PASSWORD'],
    DB: process.env['DB'],
    PORT: process.env['DB_PORT'],
    dialect: "postgres",
    ssl: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
}

module.exports = dbConfig

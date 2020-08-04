const Sequelize = require('sequelize');
const { DB_HOST, DB_NAME, DB_PASS } = process.env;
const dbContext = new Sequelize(DB_HOST, DB_NAME, DB_PASS, {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    define: {
        schema: 'public',
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = dbContext;
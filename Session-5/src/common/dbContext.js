const Sequelize = require('sequelize');

const dbContext = new Sequelize('testdb', 'postgres', 'postgres', {
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
const dbContext = require('../common/dbContext');
const Sequelize = require('sequelize');

const permissions = dbContext.define(
    'permissions',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        name: {
            type: Sequelize.STRING,
            field: 'name'
        }
    },
    {
        freezeTableName: true
    }
)

module.exports = permissions;
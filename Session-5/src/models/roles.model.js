const dbContext = require('../common/dbContext');
const Sequelize = require('sequelize');
const permissions = require('./permissions.model');

const roles = dbContext.define(
    'roles',
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

roles.belongsTo(permissions, { foreignKey: 'permissions_id' });

module.exports = roles;
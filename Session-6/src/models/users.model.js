const dbContext = require('../common/dbContext');
const Sequelize = require('sequelize');
const roles = require('./roles.model');

const users = dbContext.define(
    'users',
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
        },
        dob: {
            type: Sequelize.DATEONLY,
            field: 'dob'
        },
        email: {
            type: Sequelize.STRING,
            field: 'email'
        },
        picture: {
            type: Sequelize.STRING,
            field: 'picture'
        }
    },
    {
        freezeTableName: true
    }
)
users.belongsTo(roles, { foreignKey: 'roles_id' });

module.exports = users;
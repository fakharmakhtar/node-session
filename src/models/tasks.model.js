const dbContext = require('../common/dbContext');
const Sequelize = require('sequelize');

const tasks = dbContext.define(
    'tasks',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        title: {
            type: Sequelize.STRING,
            field: 'details'
        },
        details: {
            type: Sequelize.STRING,
            field: 'details'
        },
        dueDate: {
            type: Sequelize.DATE,
            field: 'duedate'
        },
        state: {
            type: Sequelize.STRING,
            field: 'state'
        }
    },
    {
        freezeTableName: true
    }
);

module.exports = tasks;
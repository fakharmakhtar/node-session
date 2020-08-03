const repo = require('../repositories/tasks.repository');
const { states } = require('../constants/taskStates');

const Sequelize = require('sequelize');

async function findAll() {
    return await repo.findAll();
}

async function find(searchBy = {}) {
    return await repo.find(searchBy);
}

async function findOne(name) {
    return await repo.findOne(name);
}

async function insert(task) {
    task.state = states.new;
    return await repo.insert(task);
}

async function update(task) {
    return await repo.update(task);
}

async function deleteById(id) {
    return await repo.deleteById(id);
}

module.exports = {
    deleteById,
    findAll,
    find,
    findOne,
    insert,
    update,
};
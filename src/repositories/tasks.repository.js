const tasks = require('../models/tasks.model');
const { states, stateHierarchy } = require('../constants/taskStates');

async function findAll() {
    return await tasks.findAll({});
}

async function find(searchBy = {}) {
    return await tasks.findAll({ where: searchBy });
}

async function findOne(name) {
    return await tasks.findOne({ where: { title: name } });
}

async function insert(task) {
    return await tasks.build(task).save();
}

async function update(task) {
    const entity = await tasks.findOne({ where: { id: task.id } });
    if (!entity) throw new Error('ID_NOT_FOUND');

    _validateState(entity.state, task.state);

    entity.title = task.title;
    entity.details = task.details;
    entity.dueDate = task.dueDate;
    entity.state = task.state;

    entity.save()

    return task;
}

async function deleteById(id) {

    const entity = await tasks.findOne({ where: { id } });
    if (!entity) throw new Error('ID_NOT_FOUND');

    return await entity.destroy();
}

function _validateState(previousState, newState) {
    if (!states[newState]) throw new Error('STATE_NOT_FOUND');
    if (!states[previousState]) throw new Error('STATE_NOT_FOUND');

    if (stateHierarchy[previousState].findIndex(u => u == states[newState]) === -1)
        throw new Error('STATE_NOT_VALID');
}

module.exports = {
    deleteById,
    findAll,
    find,
    findOne,
    insert,
    update
};
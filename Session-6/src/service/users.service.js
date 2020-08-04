const repo = require('../repositories/users.repository');

async function findAll(options = {}) {
    return await repo.findAll(options);
}

async function find(searchBy = {}) {
    return await repo.find(searchBy);
}

async function findOne(name) {
    return await repo.findOne(name);
}

async function insert(user) {
    return await repo.insert(user);
}
async function update(user) {
    return await repo.update(user);
}

async function deleteById(id) {
    return await repo.deleteById(id);
}

module.exports = {
    findAll,
    find,
    findOne,
    insert,
    update,
    deleteById
}
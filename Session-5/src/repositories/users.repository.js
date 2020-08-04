const users = require('../models/users.model');
const roles = require('../models/roles.model');
const permissions = require('../models/permissions.model');

const schema = {
    attributes: ['id', 'name'],
    include: [
        {
            model: roles,
            include: [permissions]
        },

    ]
};

async function findAll() {
    return await users.findAll(schema);
}

async function find(searchBy = {}) {
    return await users.findAll({ where: searchBy, ...schema });
}

async function findOne(name) {
    return await users.findOne({ where: { name, ...schema } })
}


async function insert(user) {
    return await users.build(user).save();
}

async function update(user) {
    const entity = await users.findOne({ where: { id: user.id } });
    if (!entity) throw new Error('ID_NOT_FOUND');

    entity.name = user.name;
    entity.role_id = user.role_id;

    entity.save();

    return user;
}

async function deleteById(id) {
    const entity = await users.findOne({ where: { id } });
    if (!entity) throw new Error('ID_NOT_FOUND');
    return await entity.destroy();
}

module.exports = {
    findAll,
    find,
    findOne,
    insert,
    update,
    deleteById
}
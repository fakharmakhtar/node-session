const service = require('../service/users.service');
const isEmpty = require('../helpers/is-empty');

async function getRecord(req, res) {
    if (!isEmpty(req.query)) {
        res.send(await service.find(req.query));
        return;
    }
    res.send(await service.findAll());
}

async function getRecordById(req, res) {
    try {
        const id = req.params.id;
        const user = await service.find({ id });
        res.send(user);
    } catch (e) {
        res.status(400).send(e.message);
    }
}

async function searchRecord(req, res) {
    try {
        const user = req.body;
        res.send(await service.find(user));
    } catch (e) {
        res.status(400).send(e.message);
    }
}

async function postRecord(req, res) {
    const user = req.body;
    const record = await service.insert(user);
    res.status(201).send(record);

    res.send();
}

async function putRecord(req, res) {
    const user = req.body;
    const record = await service.update(user);
    res.status(201).send(record);

    res.send();
}

async function deleteRecord(req, res) {
    try {
        const id = req.params.id;
        const users = await service.deleteById(id);
        res.send(users);
    } catch (e) {
        if (e.message === 'ID_NOT_FOUND') {
            res.status(40).send('Invalid user id');
            return;
        }
        res.status(400).send(e.message);
    }

}

module.exports = {
    getRecord,
    getRecordById,
    searchRecord,
    postRecord,
    putRecord,
    deleteRecord
}
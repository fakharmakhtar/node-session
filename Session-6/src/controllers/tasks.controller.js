const service = require('../service/tasks.service');
const { isEmpty } = require('../helpers');
const { send } = require('@sendgrid/mail');

async function getRecord(req, res) {
    if (!isEmpty(req.query)) {
        const options = {};
        let sortBy, orderBy, limit, offset, state;
        if (sortBy = req.query.sortBy) {
            options.order = [[sortBy, ((orderBy = req.query.orderBy) ? orderBy : 'ASC')]]
        }
        if (limit = req.query.limit) {
            options.limit = limit;
        }
        if (offset = req.query.offset) {
            options.offset = offset;
        }

        if (state = req.query.state) {
            options.where = { state }
        }
        res.send(await service.findAll(options));
        return;
    }

    res.status(200).send(await service.findAll());
}

async function getRecordById(req, res) {
    try {
        const id = req.params.id;
        const task = await service.find({ id });
        res.send(task);
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.send();
}

async function searchRecord(req, res) {
    try {
        const task = req.body;
        res.send(await service.find(task));
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.send();
}

async function postRecord(req, res) {
    const task = req.body;
    const record = await service.insert(task);
    res.status(201).send(record);

    res.send();
}

async function putRecord(req, res) {
    const task = req.body;
    const record = await service.update(task);
    res.status(201).send(record);

    res.send();
}

async function deleteRecord(req, res) {
    try {
        const id = req.params.id;
        const tasks = await service.deleteById(id);
        res.status(400).send(tasks);
    } catch (e) {
        if (e.message === 'ID_NOT_FOUND') {
            res.status(400).send('invalid task id');
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
    deleteRecord,
    putRecord
};
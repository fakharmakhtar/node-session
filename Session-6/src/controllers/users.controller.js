const service = require('../service/users.service');
const { isEmpty, sendEmail } = require('../helpers');


async function getRecord(req, res) {
    if (!isEmpty(req.query)) {
        const options = { where: {} };
        let name, dob;
        if (name = req.query.name) Object.assign(options.where, { name });
        if (dob = req.query.dob) Object.assign(options.where, { dob: new Date(dob) });

        res.send(await service.findAll(options));
        return;
    }
    res.send(await service.findAll());
}

async function getRecordById(req, res) {
    try {
        const id = req.params.id;
        const user = await service.findOne({ id });
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
            res.status(404).send('Invalid user id');
            return;
        }
        res.status(400).send(e.message);
    }

}

async function uploadImage(req, res) {
    let id;
    const text = 'Your profile picture has been uploaded successfully';
    if (id = req.body.id) {
        const user = await service.findOne({ id });
        const email = user.dataValues.email;
        user.picture = req.file.path;
        user.save()
        sendEmail(email, 'Profile Picture Upload', text);
    }

    res.send(text);
}

module.exports = {
    getRecord,
    getRecordById,
    searchRecord,
    postRecord,
    putRecord,
    deleteRecord,
    uploadImage
}
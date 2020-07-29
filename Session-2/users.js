const router = require('express').Router();
const fs = require('fs');
const rawData = fs.readFileSync('./users.json')
const users = JSON.parse(rawData);

function findAll() {
    return users;
}

function filterName(name) {
    const u = users.filter(e => e.name == name);
    if (!u.length) {
        throw new Error('User not found');
    }
    return u;
}
function findName(name) {
    const user = users.find(e => e.name == name);
    if (!user) {
        throw new Error('User not found F');
    }
    return user;
}
router.get('/', (req, res) => {
    try {
        res.send(filterName('John'));
    } catch (e) {
        res.status(404).send(e.message);
    }

});

module.exports = router;
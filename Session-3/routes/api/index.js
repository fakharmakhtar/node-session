const router = require('express').Router();
const BookRepo = require('../../books.repository');
const { findAll } = require('../../books.repository');

router.get('/books', (req, res) => {
    const isEmpty = obj => Object.keys(obj).length <= 0;
    if (!isEmpty(req.query)) {
        try {
            res.send(BookRepo.filter(req.query));
        } catch (e) {
            res.status(404).send(e.message);
        }
        return;
    }
    res.send(BookRepo.findAll())
});

router.get('/books/:id', (req, res) => {
    const id = req.params.id;
    try {
        res.send(BookRepo.find({ id }));
    } catch (e) {
        res.status(404).send(e.message);
    }
})

router.post('/books', (req, res) => {
    const book = req.body.book;
    const records = BookRepo.insert(book);
    res.status(201).send(records);
})

router.delete('/books/:id', (req, res) => {
    const id = req.params.id;
    try {
        res.send(BookRepo.delete(id))
    } catch (e) {
        if (e.message === 'ID_NOT_FOUND') {
            res.send(404).send('Book not found');
        }
        res.status(400).send(e.message);
    }
})

router.patch('/books/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body.book;
    try {
        res.send(BookRepo.update(id, body))
    } catch (e) {
        res.status(404).send(e.message)
    }
})

module.exports = router;
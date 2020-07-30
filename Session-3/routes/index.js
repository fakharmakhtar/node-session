const router = require('express').Router();
const apiRoutes = require('./api');

router.get('/', (req, res) => res.send('Hello World'));

router.use('/api', (req, res, next) => {
    if (req.headers.authorization !== 'Bearer 123456789') {
        res.status(403).send('PERMISSION_DENIED')
    } else {
        next()
    }
}, apiRoutes);

module.exports = router;
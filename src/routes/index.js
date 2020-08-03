const router = require('express').Router();
const tasksApiRoutes = require('./tasks');
const usersApiRouter = require('./users')

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.use('/api/tasks', tasksApiRoutes);
router.use('/api/users', usersApiRouter);

module.exports = router;

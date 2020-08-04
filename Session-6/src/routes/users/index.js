const router = require('express').Router()
const controller = require('../../controllers/users.controller');
const uploader = require('../../middlewares/uploader')


router.get('/', controller.getRecord);
router.get('/:id', controller.getRecordById);
router.post('/search', controller.searchRecord);
router.post('/', controller.postRecord);
router.put('/', controller.putRecord);
router.delete('/:id', controller.deleteRecord);
router.post('/profile-picture', uploader, controller.uploadImage)


module.exports = router;
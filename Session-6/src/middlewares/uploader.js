const multer = require('multer');
const storage = require('../common/multerConfig');

const uploader = multer({
    storage: storage
});
;

module.exports = uploader.single('avatar');
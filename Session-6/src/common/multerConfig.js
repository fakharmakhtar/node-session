const multer = require('multer');

const mimeMap = {
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'image/png': 'png'
};

module.exports = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets/avatars');
    },
    filename: (req, file, cb) => {
        console.log('filename: ', file);
        cb(null, `${file.fieldname}-${Date.now()}.${mimeMap[file.mimetype]}`);
    }
})
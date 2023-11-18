

const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

function handleImageUpload(req, res, next) {
    upload.single('image')(req, res, function (err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        next();
    });
}

module.exports = { handleImageUpload };
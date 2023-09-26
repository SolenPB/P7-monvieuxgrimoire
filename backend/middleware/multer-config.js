const multer = require('multer');
const sharpMulter = require('sharp-multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
  };
  
const storage = sharpMulter({
    destination: (req, file, callback) => callback(null, 'images'),
    imageOptions:{
        fileFormat: "webp",
        resize: { width: 206, height: 260 },
    }
});


module.exports = multer({ storage }).single('image');
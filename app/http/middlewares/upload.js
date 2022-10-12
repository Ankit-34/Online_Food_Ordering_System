const multer = require('multer');
const path=require('path')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/upload');
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, file.fieldname + '-' + Date.now()+ext)
    }
});
const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || 
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg')
    {
        cb(null, true);
    } else {
        req.flash('error','only image File allowed');
        return 0;
    }
}

const upload = multer({ storage: storage, fileFilter: filefilter,limits:{fileSize:1024*1024*3}});

module.exports = upload 
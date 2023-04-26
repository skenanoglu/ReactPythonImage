const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();

app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const extension = file.originalname.split('.').pop();
        cb(null, Date.now() + '.' + extension);
    }
})

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
    if (req.file) {
        res.send({ success: true, message: 'File uploaded successfully' });
    } else {
        res.status(400).send({ success: false, message: 'No file uploaded' });
    }
});

app.listen(3000, () => {
    console.log('Sunucu 3000 numaralı portta çalışıyor...');
});
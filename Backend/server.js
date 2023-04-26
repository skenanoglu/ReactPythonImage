const express = require('express');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
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

app.post('/data', function (req, res) {
    console.log(req.body);
});


app.listen(3000, () => {
    console.log('Sunucu 3000 numaralı portta çalışıyor...');
});
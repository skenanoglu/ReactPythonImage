const express = require('express');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const app = express();
var command = 'C:/Users/Sahin/Desktop/Ders/ReactWithPython/Python/resize.py';
var exec = require('child_process').exec;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var fileName;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        fileName = file.originalname;
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

app.post('/data', async function (req, res) {
    await exec(command + " " + req.body.width + " " + req.body.height + " " + req.body.image.file.name + " " + req.body.derece + " "
        + req.body.ayna,
        function (error, stdout, stderr) {
        });
    res.send({ filename: req.body.image.file.name });
});


app.listen(3000, () => {
    console.log('Sunucu 3000 numaralı portta çalışıyor...');
});
const express = require('express');
const fileUpload = require('express-fileupload');
const busboy = require('connect-busboy');

const fs = require('fs');
const app = express();
const JSONPORT = process.env.PORT || 3002;
const authMiddleware = require('./middleware/auth');
const uploadedFiles = [];
// default options
app.use(fileUpload());
app.use(busboy()); 

app.use([authMiddleware]);
app.use(express.static('public'));

// app.get('/', function(req, res) {
//   console.log(req);
//   res.send({message: 'Welcome to Zinder File Server. Make requests to getyour files or upload new files'})
// });

app.post('/upload', function(req, res) {
  let sampleFile;
  let uploadPath;
  let fileName = '';
  let message = '';
  const public = __dirname + '/public'
  let date = new Date(Date.now());
  let today = date.getDay().toString() + '-' + date.getMonth().toString() + '-' + date.getFullYear().toString();
  if (!req.files || !req.files.file) {
    message = 'No file was uploaded.';
    return res.status(400).send(message);
  }
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.file;
  const dir = '/v/' + today ;
  if (!fs.existsSync(public + dir)){
    fs.mkdirSync(public + dir);
  }
  fileName = Date.now().toString() + '-' + sampleFile.name ;
  uploadPath = dir +  '/' + fileName;
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(public + uploadPath, function(err) {
    if (err){
      return res.status(500).send(err);
    }
    uploadedFiles.unshift(fileName);
    console.log(uploadPath);
    console.log(uploadPath);
    let serverLocation = public + uploadPath ;
    message = 'File uploaded!';
    res.send({message, serverLocation , dir, uploadPath, fileName, file: uploadPath});
  });
});

app.post('/upload-multi', function(req, res) {
  let sampleFile;
  let uploadPath;

  console.log(req)
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  console.log(req.files);
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + '/public/v/kyc' + sampleFile.name;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);
    res.send({message: 'File uploaded!', file: uploadPath});
  });
});
app.listen(JSONPORT, ()=>{
  console.log('JSON upload server is running in port ' + JSONPORT)
})

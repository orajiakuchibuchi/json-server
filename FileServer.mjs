import express from "express";
import fileUpload from "express-fileupload";
import busboy from "connect-busboy";
import authMiddleware from './middleware/auth.mjs';
import fileDirName from './file-dir-name.mjs';
const { __dirname } = fileDirName(import.meta);

import fs from "fs";

const app = express();
const JSONPORT = process.env.PORT || 3002;
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
  const public_dir = __dirname + '/public'
  let date = new Date(Date.now());
  let today = date.getDay().toString() + '-' + date.getMonth().toString() + '-' + date.getFullYear().toString();
  if (!req.files || !req.files.file) {
    message = 'No file was uploaded.';
    return res.status(400).send(message);
  }
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.file;
  const dir = '/v/' + today ;
  if (!fs.existsSync(public_dir + dir)){
    fs.mkdirSync(public_dir + dir);
  }
  fileName = Date.now().toString() + '-' + sampleFile.name ;
  uploadPath = dir +  '/' + fileName;
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(public_dir + uploadPath, function(err) {
    if (err){
      return res.status(500).send(err);
    }
    uploadedFiles.unshift(fileName);
    console.log(uploadPath);
    console.log(uploadPath);
    let serverLocation = public_dir + uploadPath ;
    message = 'File uploaded!';
    res.send({message, serverLocation , dir, uploadPath, fileName, file: uploadPath, created_at: date, updated_at: date});
  });
});

app.post("/upload-v2", async (req, res) => {
  let uploadPath;
  let fileName = "";
  let message = "";
  let errors = [];
  const public_dir = __dirname + "/public";
  let date = new Date(Date.now());
  let today =
    (date.getDay() + 1).toString() +
    "-" +
    (date.getMonth() + 1).toString() +
    "-" +
    date.getFullYear().toString();
  const dir = "/v/" + today;
  const result = [];
  if (!req.files) {
    message = "No file was uploaded.";
    return res.status(400).send(message + JSON.stringify(req.files));
  }
  if (!fs.existsSync(public_dir + dir)) {
    fs.mkdirSync(public_dir + dir);
  }
  const paths = Object.entries(req.files).map((file) => {
    const [key, sampleFile] = file;
    fileName = Date.now().toString() + "-" + sampleFile.name;
    const v = "/v/" + today + "/" + key.toLowerCase();
    if (!fs.existsSync(public_dir + v)) {
      fs.mkdirSync(public_dir + v);
    }
    uploadPath = v + "/" + fileName;
    return {sampleFile, uploadPath};
  });
  console.log(Object.entries(req.files).length);
  await new Promise ((resolve, reject) => {
    paths.forEach((v,indx) => {
      const sampleFile = v.sampleFile;
      const uploadPath = v.uploadPath;
      sampleFile.mv(public_dir + uploadPath, function (err) {
        let serverLocation = public_dir + uploadPath;
        if (err) {
          errors.unshift(err);
        } else {
          uploadedFiles.unshift(fileName);
          message = "File uploaded!";
        }
        result.unshift({
          message,
          serverLocation,
          dir,
          uploadPath,
          fileName,
          file: uploadPath,
          errors,
          created_at: date, updated_at: date
        });
        console.log(indx)
        // console.log(paths)
        console.log(paths.length)
        if(indx == paths.length-1){
          resolve(result);
        }
      });
    });
  });
  res.send(result[0]);
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









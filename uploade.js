const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const JSONPORT = process.env.PORT || 3550;

// default options
app.use(fileUpload());

app.post('/upload', function(req, res) {
  let sampleFile;
  let uploadPath;

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
  console.log('JSON upload server is running in port' + JSONPORT)
})

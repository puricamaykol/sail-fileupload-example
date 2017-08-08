// api/controllers/FileController.js
const readline = require('readline');

const fs = require('fs');
module.exports = {

  index: (req,res) => {

    res.writeHead(200, {'content-type': 'text/html'});
    res.end(
    '<form action="http://localhost:1300/file/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="avatar" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
    )
  },
  upload: (req, res) => {
    //let directory = require('path').resolve(sails.config.appPath, 'assets/images')
    const writable = fs.createWriteStream('./file.txt');
    var readable = req.file('avatar').read();

    this.parseCSV(readable);

    /*.on('data', chunk => {
  console.log(chunk);
  console.log('readable:', req.file('avatar').read());
  });*/
  /*.upload({
  dirname: require('path').resolve(sails.config.appPath, 'assets/images')
},function (err, files) {
      if (err)
        return res.serverError(err);

      return res.json({
        message: files.length + ' file(s) uploaded successfully!',
        files: files
      });
    });*/
  },

  parseCSV: (stream, separator) => {
    var cant = 0;
    //req.file('avatar').pipe(writable);

    const rl = readline.createInterface({
      input: stream
   });

   rl.on('line', line => {
      console.log('Line from file:', line);
      setTimeout(()=>{ 
        cant++;
        console.log(cant); }, 3000);
    });
  }

};
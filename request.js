var request = require('request');
var fs = require('fs');
var firstTime = false;

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })

       .on('data', function () {
       if (firstTime === false) {
         console.log('Downloading image...');
       }
       firstTime = true;
  })
       .on('end', function() {
         console.log('Downloading complete');
       })


       .on('response', function (response) {
         console.log('Response Status Message: ', response.statusMessage);
         console.log('Content Type: ', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpeg'));



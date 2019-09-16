const fs = require('fs')

const files = fs.readdir('../', function(err, files) {
    if(err){
        console.log('Error', err)
    } else {
        console.log('result', files)
    }
});

files;
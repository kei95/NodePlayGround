const fs = require('fs');
const readSteram = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example2.txt', )
readSteram.on('data', (chunk) => {
    console.log(chunk)
    writeStream.write(chunk);
});
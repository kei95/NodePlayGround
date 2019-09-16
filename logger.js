
var url = 'http://mylogger.io/log';

console.log(__filename);
console.log(__dirname);
// object way
function log(message) {
    // Send an HTTP request
    console.log("Hello " + message)
}

module.exports.log = log;

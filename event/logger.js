const EventEmitter = require('events');
var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        // Send an HTTP request
        console.log("Hello " + message)
        // Raise an event
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}
module.exports = Logger;

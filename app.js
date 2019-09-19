const tutorial = require('./tutorial');
console.log(tutorial.sum(5,8))
console.log(tutorial.PI)
new tutorial.SomeMathObject()


const EventEmitter = require('events');
const eventEmitter = new EventEmitter()

eventEmitter.on('tutorial', (num1, num2) => {
    console.log(num1 + num2);
})

eventEmitter.emit('tutorial', 5, 8);

class Person extends EventEmitter{
    constructor(name) {
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let pedro = new Person('pedro');
pedro.on('name', ()=> {
    console.log('my name is ' + pedro.name);
});

pedro.emit('name');

let christa = new Person('christa');
christa.on('name', () => {
    console.log('my name is ' + christa.name);
})

christa.emit('name')
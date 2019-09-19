const sum = (n1, n2) => {
    return n1 + n2
}

const PI = 3.14;

class SomeMathObject {
    constructor() {
        console.log('object created')
    }
}


module.exports = {sum : sum, PI: PI, SomeMathObject: SomeMathObject};
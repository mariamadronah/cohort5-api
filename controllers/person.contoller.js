const person = require('./models/person')

function infocontroller () {
    let person = new person ("mariam", 23)
    return{
        age:person.getAge(),
        name:person.getName()
    }
}

module.exports = infocontroller;
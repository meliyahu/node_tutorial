var events = require('events');
var util = require('util');

var Person = function (name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('James');
var mary = new Person('Mary');
var seiko = new Person('Seiko');

var people = [james, mary, seiko];
people.forEach((person) => {
    person.on('speak', (msg) => {
       console.log(`${person.name} said ${msg}`);
    });
});

james.emit('speak', 'I am a cool dude');
mary.emit('speak', 'I am a proffessor');
seiko.emit('speak', 'I am a university student');
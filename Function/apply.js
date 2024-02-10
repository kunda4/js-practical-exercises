const person = {'name': 'kunda', 'age': 23}

function sayHello(greeting, message){
    console.log(`${greeting} ${this.name}! your age is ${this.age}, ${message}`)
}

sayHello.apply(person,['Hello', 'Take care'])
const person = {'name': 'kunda', 'age': 23}

function sayHello(greeting){
    console.log(`${greeting} ${this.name}! your age is ${this.age}`)
}

sayHello.call(person,'Hello')
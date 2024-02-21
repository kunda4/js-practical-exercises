// what the output of the following codes

var greeting = 'understanding this keyword!';

const obj = {
    greeting: 'Hello World!',
    
    getGreeting(greeting) {
        var greeting = 'Hello India!';
        return this.greeting;
    }
}

console.log(obj.getGreeting("Welcome to Javascript!"));

// the output will be
//Hello World!
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    
    introduce(){
        console.log(`my name is ${this.name} and I'm ${this.age} years old`)
    }
    
}
const greet = new Person('Agnes', 27)
greet.introduce()
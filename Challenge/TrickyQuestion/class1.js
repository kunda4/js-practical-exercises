let Person = class {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
};

const person = new Person('Learn', 'JavaScript')
console.log(person.firstName)
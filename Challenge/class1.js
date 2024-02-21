// what the output of the following codes

class A {
    constructor() {
        console.log(new.target.name)
    }
}

class B extends A {}

new A();
new B();

// the following code output is
//A
//B

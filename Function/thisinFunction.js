class myClass{
    constructor(){
        this.value = 45
    }

    normalMethod(){
        setTimeout(function(){
            console.log(this.value)
        }, 1000)
    }
}

const instance = new myClass()
instance.normalMethod()
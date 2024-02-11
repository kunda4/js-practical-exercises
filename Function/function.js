function outerFunction(){
    const outerValiable = 'I am outside'

    function innerFunction(){
        console.log(outerValiable)
    }
    return innerFunction
}
const closure = outerFunction()
closure()
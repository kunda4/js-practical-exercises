/**
What will be the output of the following codes
 */

function job(){
    return new Promise(function(resolve, reject){
        reject();
    })
}

let promise = job();

promise.then(function(){
    console.log('success 1')
}).then(function(){
    console.log('success 2')
}).then(function(){
    console.log('success 3')
}).catch(function(){
    console.log('Error 1')
}).then(function(){
    console.log('success 4')
})

console.log('hello 1')

/**
the output would be
hello 1
Error 1
success 4
it first console the hello 1 because is synchrounous code and then Error 1
because the promise is rejected and the success 4 because it is after 
the the catch method. 
 */
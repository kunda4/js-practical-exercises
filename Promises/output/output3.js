// what will be the output of the following codes

function job(state){
    return new Promise(function(resolve,reject){
        if(state){
            resolve("success");
        } else {
            reject("error")
        }
    });
}

let promise = job(true); //Promise('resolve')

promise
.then(function (data) {
    console.log(data); // success

    return job(true); //Promise('resolve')
})
.then(function (data) {
    if(data !== 'victory'){
        throw 'Defeat';  // throw 'Defeat'
    }
    return job(true);  //Promise('resolve') but ignored
})
.then(function (data) {
    console.log(data);
})
.catch(function (error) {
    console.log(error);    //Defeat
    return job(false);     //Promise('reject')
})
.then(function (data) {
    console.log(data);
    return job(true);      //Promise('resolve') but ignored
})
.catch(function (error){
    console.log(error);      // error
    return 'Error caught';   //Promise('resolve')
})
.then(function (data) {
    console.log(data);           // Error caught
    return new Error('test');   //Promise('resolve')
})
.then(function (data) {
    console.log('success:', data.message); // success: test
})
.catch(function (data){
    console.log('Error:', data.message)
})

//the output will be 
/**
success
Defeat
error
Error caught
success: test
 */
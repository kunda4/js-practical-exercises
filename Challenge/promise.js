//what will be the output of the following this code.

var x = new Promise(function(resolve, reject){
    resolve('resolve'),
    reject('reject')
})

const res = x.then(x => console.log('fulfilled' + ' ' + x))
.catch(x=> console.log('rejected' + ' ' + x))

console.log(res)

// the output of the following codes will be
//  Promise object
//  fullfiled resolve
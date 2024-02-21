// what the output of the following methods

function test(x, x){
    console.log(x + ' ' + x)
}
test(1,2);

'use strict'
function test(x, x){
    console.log(x + ' ' + x)
}
test(3,4);

// the output will be
// 2 2
// 4 4

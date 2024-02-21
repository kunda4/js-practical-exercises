// what the output of the following of this codes

const interval = setInterval(cb, 0, 'first', 'second');
console.log(typeof(interval));

function cb(a,b){
    console.log(a);
    console.log(b);
    clearInterval(interval);
}

console.log(typeof(interval));

// the output of the following codes is
// number
// number
// first
// second
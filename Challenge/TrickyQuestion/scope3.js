// Guesse the output of the following codes

const x = (a, b = 3) => {
    console.log(arguments[0] + '' + arguments[1]);
    arguments[0] = 4;
    console.log(a);
    console.log(b);
    
}

x(1,2)

// the output of the following codes will be
// 12
// 1
// 2
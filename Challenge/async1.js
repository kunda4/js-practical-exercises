// Guess the output of the following code

async function async1(){
    setTimeout(() => {
        console.log('async1')
    }, 0)
}

async function async2() {
    console.log('start');
    await async1();
    console.log('end')
}

async2();

// the output is
// start
// end 
// async1
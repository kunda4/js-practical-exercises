// what will be the output of the following codes

console.log('start');

function importantAction(username, cb) {
    setTimeout(()=> {
        cb(`Subscribe to ${username}`)
    },1000)
}
 const message = importantAction('username', (message)=> {
      console.log(message)
 })
 
 console.log('stop');

/**
start
stop
Subscribe to username
 */
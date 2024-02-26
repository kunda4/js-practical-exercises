// what will be the output of the following codes

console.log('start');

function importantAction(username, cb) {
    setTimeout(()=> {
        cb(`Subscribe to ${username}`)
    },1000)
}
function likedVideo(video, cb) {
    setTimeout(() => {
        cb(`liked the ${video} video`)
    }, 500)
}
 importantAction('username', (message)=> {
      console.log(message); 
 });
       likedVideo('jackychan', (action)=> {
          console.log(action)
      });
 
 console.log('stop');

/**
start
stop
liked the jackychan video
Subscribe to username
 */
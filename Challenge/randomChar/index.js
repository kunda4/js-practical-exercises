function generateRandom(){
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let strLength = 7;
    let result = ''

    for(let i = 0; i<strLength; i++){
        const random = Math.floor(Math.random() * chars.length)
        result += chars.substring(random, random+1)
    }

    document.getElementById('randomChar').innerHTML = result
}
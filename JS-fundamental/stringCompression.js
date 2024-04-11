function compressString(str){
    
    let compressed = ''
    let count = 1;
    
    for(let i=1; i<=str.length; i++){
        if(str[i] !== str[i-1]){
            compressed+= str[i-1] + count
            count = 1;
        }
        else{
            count++;
        }
    }
    return compressed
  
}

console.log(compressString("AAAABBBCCDAA"))
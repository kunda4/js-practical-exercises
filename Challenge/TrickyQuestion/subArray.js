function chunkArray(arr, n){

    const result = [];
    for(let i = 0; i < arr.length; i+=n){
        const chunk = arr.slice(i, i+n)
        result.push(chunk)
    }

    return result
}

console.log(chunkArray([1,2,3,4,5,6,7,4,5,3], 2))
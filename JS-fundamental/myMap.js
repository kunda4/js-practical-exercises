function myMap(array, callBackFn){

    const result =[];
    for(let i=0; i<array.length; i++){
        result.push(callBackFn(array[i], i, array))
    }

    return result;

}

const arr = [1,2,3,4,5];
console.log(myMap(arr, (ele)=> ele*ele))
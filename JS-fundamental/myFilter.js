function myFilter(array, callBackFn){

    const result = [];
    for(let i=0; i<array.length; i++){

        if(callBackFn(array[i], i, array)){
            result.push(array[i])
        }
    }

    return result;
}

const arr = [1,2,3,4,5,6,7,8];
console.log(myFilter(arr, (ele) => ele%2 ===0))
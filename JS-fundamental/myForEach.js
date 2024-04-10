function myForEach(array, callBackFn){

    for(let i = 0; i<array.length; i++){

        callBackFn(array[i], i, array)
    }
}

const arr = [1,2,3,4,5,6];
myForEach(arr, (ele)=> console.log(ele*2))
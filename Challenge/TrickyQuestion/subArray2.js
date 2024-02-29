/**
Given an array of integers a, your task is to find how many of 
its contiguous subarrays of length m contain a pair of integers 
with a sum equal to k.
*/

function subArray(arr, m, k){
    let count = 0;
    for(let i = 0; i<=arr.length-m; i++){
        const minArray = arr.slice(i, i+m)
        
        for(let s =0; s<=m; s++){
            for(let t= s+1; t<=m; t++){
                if(minArray[s] + minArray[t] === k){
                    count++;
                    break;
                }
            }
        }
    }
    return count;
}
console.log(subArray([1,2,3,4,5,6,7,8,7,6],3,5))
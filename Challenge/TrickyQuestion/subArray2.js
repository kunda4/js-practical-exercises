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

console.log(subArray([2, 4, 7, 5, 3, 5, 8, 5, 1, 7], 4, 10))
/**
Array statistics
You are given an array of numbers. Your task is to implement a function called arrayStats that returns an object containing various statistics about the array.

The returned object should have the following properties:
sum: The sum of all numbers in the array.
average: The average of all numbers in the array (rounded to two decimal places).
min: The minimum value in the array.
max: The maximum value in the array.

Example:
arrayStats([1, 2, 3, 4, 5]); // should return { sum: 15, average: 3.00, min: 1, max: 5 }

 */

function arrayStats(arr){
    const myObj = {};
    const sum = arr.reduce((acc,curr)=>acc+curr ,0);
    const average = sum/arr.length;
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    myObj["Sum:"] = sum;
    myObj["Average:"] = average;
    myObj['Max:'] = max;
    myObj["Min:"] = min;

    return myObj


}

console.log(arrayStats([ 1, 2, 3, 4, 5 ]));
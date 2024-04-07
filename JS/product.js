/**
Sort products
You are given an array of product objects, each containing a 
name (string) and a price (number). Your task is to implement
a function called sortProducts that sorts the products based 
on their prices in ascending order. 
 */

function myObject(objArr){

    return objArr.sort((a,b) => a.price-b.price)
}
const products = [
    { name: 'Product A', price: 100 },
    { name: 'Product B', price: 50 },
    { name: 'Product C', price: 200 },
   ];
console.log(myObject(products))
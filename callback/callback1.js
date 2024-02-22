function display(x, y, operation) {
    
    var result = operation(x, y);
    console.log(result);
}
function add(a,b){
    return a+b
}
function multiply(a,b){
    return a*b
}
function substract(a,b){
    return a-b
}
function divide(a,b){
    return a/b
}

display(10, 5, add);
display(10, 5, multiply);
display(10, 5, substract);
display(10, 5, divide);
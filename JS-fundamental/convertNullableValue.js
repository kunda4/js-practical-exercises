function converNullableValue(obj){

    for(let key in obj){
        console.log(key)
        if(obj[key] == null){
            obj[key] = 0;
        }
        else if(obj[key] == undefined){
            obj[key] = '';
        }
    }

    return obj
}

const obj = {
    Name: "Agnes Iradukunda",
    age: null,
    address: undefined
}

console.log(converNullableValue(obj))

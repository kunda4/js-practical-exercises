const falsy = new Boolean(false);
if(falsy){
    if([]) console.log('Array [] is empty');
    if([] == false) console.log('Empty [] is compared with false');
}

// the output here will be the 
// Array [] is empty
// Empty [] is compared with false
// the new Boolean return boolean value in object
// the Boolean return primitive value directly

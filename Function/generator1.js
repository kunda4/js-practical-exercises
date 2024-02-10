function* myGenerator(){
    console.log('start')
    yield 'First Value'
    console.log('Resume after first value')
    yield 'Second Value'
    console.log('Resume after second value')
    yield 'Third Value'
    console.log('End')
}

const Gen = myGenerator()
console.log(Gen.next())
console.log(Gen.next())
console.log(Gen.next())
console.log(Gen.next())
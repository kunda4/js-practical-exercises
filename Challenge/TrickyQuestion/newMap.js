// Guesse the output in the following lines of code
// the convenience way of assigning the data in map is using set method

const mapData = new Map();
mapData['name'] = 'Test';
mapData.set('subject', 'Javascript')

console.log(mapData.has('Test'));
console.log(mapData.has('subject'));
console.log(mapData);

// the output is
// false, true, 1



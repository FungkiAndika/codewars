// function addBinary(a,b) {
//     return (a+b).toString(2)
// }

// ALTER :
const addBinary = (a,b) => (a+b).toString(2)

console.log(addBinary(1,0)); // '1'
console.log(addBinary(1,1)); // '10'
console.log(addBinary(1,2)); // '11'
console.log(addBinary(1,3)); // '100'
console.log(addBinary(1,16)); // '10001'

// function squareDigits(num){
//     num = num.toString().split('').map(Number)
//     return num.map((s,a) => s * a)
// }

// ARROW FUNCTION SCRIPT 
const squareDigits = num => parseInt((num = num.toString().split('').map(Number)).map((f,s) => f * num[s]).join(''))

// ALTER :
// const squareDigits = num => parseInt(num.toString().split('').map(i => i*i).join(''))
console.log(squareDigits(62345)); // 36491625
console.log(squareDigits(3212)); // 9414
console.log(squareDigits(2112)); // 4114
console.log(squareDigits(1111)); // 1111
console.log(squareDigits(1234321)); // 14916141
console.log(squareDigits(0)); // 0
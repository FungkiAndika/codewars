// function squareDigits(num){
//     num = num.toString().split('').map(Number)
//     return num.map((s,a) => s * a)
// }

// ONE LINE SCRIPT 
const squareDigits = num => parseInt((num = num.toString().split('').map(Number)).map((f,s) => f * num[s]).join(''))

// ALTER :
// const squareDigits = num => parseInt(num.toString().split('').map(i => i*i).join(''))
console.log(squareDigits(62345));
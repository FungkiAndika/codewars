// function isSquare(n) {
//     const sqrt = Math.sqrt(n)
//     if (n < 0) return false
//     if (n == 0) return true
//     return n < 0 ? n+": Negative numbers cannot be square numbers": Number.isInteger(sqrt) ? n+" is a square number "+"("+sqrt+" * "+sqrt+")" && true : n+" is not a square number" && false
// }

// ARROW FUNCTION
// for return true or false
const isSquare = n => n < 0 ? false : Number.isInteger(Math.sqrt(n))
console.log(isSquare(33)); // false
console.log(isSquare(0)); // true
console.log(isSquare(25)); // true
console.log(isSquare(-1)); // false
console.log(isSquare(3)); // false
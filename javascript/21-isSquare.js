// function isSquare(n) {
//     const sqrt = Math.sqrt(n)
//     if (n < 0) return false
//     if (n == 0) return true
//     return n < 0 ? n+": Negative numbers cannot be square numbers": Number.isInteger(sqrt) ? n+" is a square number "+"("+sqrt+" * "+sqrt+")" && true : n+" is not a square number" && false
// }

// ONE LINE
// for return true or false
const isSquare = n => n < 0 ? false : Number.isInteger(Math.sqrt(n))
console.log(isSquare(33));

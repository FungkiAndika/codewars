function isSquare(n) {
    const sqrt = Math.sqrt(n)
    return n < 0 ? n+": Negative numbers cannot be square numbers": Number.isInteger(sqrt) ? n+" is a square number "+"("+sqrt+" * "+sqrt+")" :n+" is not a square number"
}
console.log(isSquare(43));

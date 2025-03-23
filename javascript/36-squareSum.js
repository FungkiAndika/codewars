function squareSum(numbers) {
    // return numbers >= 0 ? 0 : numbers.map(a => a*a).reduce((a,b) => a+b)
    // ALTER :
    return numbers.reduce((a,b) => a+b**2, 0)
}
console.log(squareSum([1,2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
console.log(squareSum([]), 0);
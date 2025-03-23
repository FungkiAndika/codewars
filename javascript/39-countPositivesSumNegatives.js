function countPositivesSumNegatives(input) {
    if (!input || input.length == 0) return []
    return [(input.filter(a => a > 0).length),(input.filter(a => a < 0).reduce((a,b) => a+b , 0))]
}
console.log(countPositivesSumNegatives([1, -2, 3, -4, 5])); // Output: [3, -6]
console.log(countPositivesSumNegatives([]));                 // Output: []
console.log(countPositivesSumNegatives(null));               // Output: []
console.log(countPositivesSumNegatives([0, 0, -1, -1]));     // Output: [0, -2]
console.log(countPositivesSumNegatives([1, 2, 3, -1]));      // Output: [3, -1]

// function sumTwoSmallestNumbers(numbers) {
//     return numbers.sort((a,b)=> a-b)[0]+numbers.sort((a,b)=> a-b)[1]
// }

// ALTER :
function sumTwoSmallestNumbers(numbers) {
    var [a,b] = numbers.sort((a,b)=>a-b)
    return a+b
}
console.log(sumTwoSmallestNumbers([12, 5, 8, 19, 22])); // 13         (5 + 8 = 13)

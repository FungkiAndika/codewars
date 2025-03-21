// function twoSum(numbers, target) {
//     for (let i = 0; i < numbers.length -1; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             if (numbers[i] + numbers[j] === target) {
//                 return [i,j]
//             }
//         }
//     }
// }

// ALTER
const twoSum = (a, n) => { for (let i = 0; i < a.length - 1; i++) { for (let j = i + 1; j < a.length; j++) { if (a[i] + a[j] === n) return [i, j] } } }
console.log(twoSum([1, 2, 3], 4)); // [0,2]       Indices 0 and 2 of the array sum to 4.
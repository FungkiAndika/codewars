// function positiveSum(arr) {
//     let r = arr.filter(n => n > 0)
//     if (r.length == 0) {
//         return r = 0
//     } else {
//         return r.reduce((total, num) => total + num, 0)
//     }
// }

// Exclude < 0 :
// arr.filter(n => n > 0)

// For sum all number in array :
// return arr.reduce((total, num) => total + num)

// ONE LINE FUNCTION
const positiveSum = (arr) => arr.filter(n => n > 0).length == 0 ? arr = 0 : arr.filter(n => n > 0).reduce((total, num) => total + num, 0)

// ALTER :
// const positiveSum = (arr) => arr.reduce((a,b)=> a + (b > 0 ? b : 0),0)
console.log(positiveSum([4,6,-8])); // 10
console.log(positiveSum([0,-3,5,7])); // 12
console.log(positiveSum([])); // 0
console.log(positiveSum([-1,-2,-3,-4])); // 0
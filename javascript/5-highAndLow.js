// function highAndLow(numbers){
//     const y = numbers.split(" ").map(Number)
    
// }

// ARROW FUNCTION
const highAndLow = (numbers) => Math.max(...numbers.split(" ").map(Number))+" "+Math.min(...numbers.split(" ").map(Number))
console.log(highAndLow('1 2 3 4 5 -3')); // 5 -3
console.log(highAndLow('1 2 -3 4 5 -3')); // 5 -3
console.log(highAndLow('1 9 3 4 -5 -3')); // 9 -5
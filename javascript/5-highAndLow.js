// function highAndLow(numbers){
//     const y = numbers.split(" ").map(Number)
//     
// }

const highAndLow = (numbers) => Math.max(...numbers.split(" ").map(Number))+" "+Math.min(...numbers.split(" ").map(Number))
console.log(highAndLow('1 2 3 4 5 -3'));
// function evenOrOdd(number) {
//     if (number % 2 === 0) {
//         number = 'Even';
//     }
//     else {
//         number = 'Odd';
//     }
//     return number;
// }

// function evenOrOdd(number) {
//     return number % 2 === 0 ? 'even' : 'odd';
// }

// ARROW FUNCTION
const evenOrOdd = (number) =>  number % 2 === 0 ? 'even' : 'odd';

console.log(evenOrOdd(2)); // even
console.log(evenOrOdd(3)); // odd

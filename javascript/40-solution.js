// function solution(number){
//     let result = []
//     if (number <= 0) return 0
//     for (let i = 0; i < number; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             result.push(i)
//         }
//     }
//     return result.reduce((a,b) => a+b)
// }

// ALTER :
solution = n => n<=0?0 : Array.from({length:n},(_,i) => (i % 3 == 0|| i % 5 == 0? i : 0)).reduce((a,b) => a+b)
console.log(solution(10));

// function usdcny(usd) {
//     let y = usd * 6.75
//     // if (y > 1000, y < 100) {
//     //     return y.toFixed(2)+" Chinese Yuan"
//     // }
//     // if (y % 2 === 0 , y % 3 === 0) {
//     //     return y.toFixed(2)+" Chinese Yuan"
//     // }
//     // else {
//     //     return y.toFixed(2)+" Chinese Yuan"
//     // } 
//     return y.toFixed(2)+" Chinese Yuan"
// }

// ARROW FUNCTION
// usdcny = $ => `${($*6.75).toFixed(2)} Chinese Yuan`
const usdcny = (usd) => (usd*6.75).toFixed(2)+" Chinese Yuan"

console.log(usdcny(15)); // 101.25 Chinese Yuan
console.log(usdcny(6758)); // 45616.50 Chinese Yuan
console.log(usdcny(1000)); // 6750.00 Chinese Yuan
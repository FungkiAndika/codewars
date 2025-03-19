// function nbYear(p0, percent, aug, p) {  
//     let years = 0
//     while (p0 < p) {
//         p0 += Math.floor(p0*(percent/100)+aug)
//         years++
//     }
//     return years
// }

// ARROW FUNCTION
const nbYear = (p0, percent, aug, p) => {let years = 0 ; while (p0 < p) {p0 += Math.floor(p0*(percent/100)+aug); years++}; years}
console.log(nbYear(1500, 5, 100, 5000));

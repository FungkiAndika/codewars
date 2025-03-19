// function nbYear(p0, percent, aug, p) {
// // WHILE :
//     let years = 0
//     while (p0 < p) {
//         p0 += Math.floor(p0*(percent/100)+aug)
//         years++
//     }
//     return years
// // FOR :
//     for (var years = 0; p0 < p; years++) {
//         p0 = Math.floor( p0 + p0 * percent / 100 + aug);
//     }
//     return years
// }

// ARROW FUNCTION
const nbYear = (p0, percent, aug, p) => {let years = 0 ; while (p0 < p) {p0 += Math.floor(p0*(percent/100)+aug); years++}; return years}
// const nbYear = (p0, percent, aug, p) => {for (var years = 0; p0 < p; years++) {p0 = Math.floor( p0 + p0 * percent / 100 + aug);}return years}
console.log(nbYear(1500000, 2.5, 10000, 2000000));

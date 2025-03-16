// function maskify(cc) {
//     return cc.length < 5 ? cc: (cc.slice(0,(cc.length-4)).split('').map(a => "#").join(''))+cc.slice(cc.length-4)
// }

// ONE LINE
const maskify = cc => cc.length < 5 ? cc : cc.slice(0, cc.length-4).split('').map(a => "#").join('')+cc.slice(cc.length-4)
console.log(maskify("qwerty"));

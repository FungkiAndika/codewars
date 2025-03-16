// function maskify(cc) {
//     return cc.length < 5 ? cc: (cc.slice(0,(cc.length-4)).split('').map(a => "#").join(''))+cc.slice(cc.length-4)
// }

// ONE LINE
const maskify = cc => cc.length < 5 ? cc : cc.slice(0, cc.length-4).split('').map(a => "#").join('')+cc.slice(cc.length-4)
// ALTER :
// const maskify = cc => cc.slice(-4).padStart(cc.length,'#')
// const maskify = cc => cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
console.log(maskify("qwerty"));

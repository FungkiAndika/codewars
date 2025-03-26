// function towerBuilder(nFloors) {
//     let arr = []
//     let es = " "
//     let s = "*"
//     let n = nFloors
//     let f = 1
//     while (n > 0) {
//         n -= 1
//         arr.push((es.repeat(n)+(s.repeat(f))+es.repeat(n)))
//         f += 2
//     }
//     return arr
// }

// ALTER :

const towerBuilder = nf => Array.from({length: nf}, (_,i) => {
    return (" ").repeat(nf - i -1)+("*".repeat(i+i+1))+(" ").repeat(nf - i -1)
})

console.log(towerBuilder(3)); // [ '  *  ', ' *** ', '*****' ]
console.log(towerBuilder(4)); // [ '   *   ', '  ***  ', ' ***** ', '*******' ]
/* Output :
[
  '   *   ',
  '  ***  ',
  ' ***** ',
  '*******'
]
*/
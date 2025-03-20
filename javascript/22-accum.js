// function accum(s) {
//     return s.toUpperCase().split('').map((a,b) => a + a.repeat(b).toLowerCase()).join('-')
// }

// ARROW FUNCTION                             make param   repeating according to      to String
//        parameter capitalize  make array  (letter)(index)    the index number       and add '-'
//            ↓          ↓           ↓            ↓ ↓             ↓  ↓                   ↓
const accum = s => s.toUpperCase().split('').map((a,b) => a+a.repeat(b).toLowerCase()).join('-')
console.log(accum("abcd")); // 'A-Bb-Ccc-Dddd'
console.log(accum("bcad")); // 'B-Cc-Aaa-Dddd'
console.log(accum("random")); // 'R-Aa-Nnn-Dddd-Ooooo-Mmmmmm'

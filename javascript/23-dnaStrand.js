// function dnaStrand(dna) {
//     return dna.toUpperCase().split('').map(a => ({'A':'T','T':'A','G':'C','C':'G'})[a]).join('')
// }

// ONE LINE
const dnaStrand = dna => dna.toUpperCase().split('').map(a => ({'A':'T','T':'A','G':'C','C':'G'})[a]).join('')
console.log(dnaStrand("ATTGC")); // 'TAACG'

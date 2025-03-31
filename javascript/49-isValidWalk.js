// function isValidWalk(walk) {
//     if (walk.length !== 10) return false
//     let ns = 0
//     let we = 0

//     for (let s of walk) {
//         if (s === 'n') ns += 1
//         if (s === 's') ns -= 1
//         if (s === 'w') we += 1
//         if (s === 'e') we -= 1
//     }
//     return ns === 0 && we === 0
// }

// ARROW FUNCTION                               check if walk   reduce movement to  sum all movements,  
//                                             has 10 steps     single value         should be zero
//            ↓                                    ↓                 ↓                    ↓
const isValidWalk = walk => walk.length === 10 && !walk.reduce((w, step) => w + { "n": -1, "s": 1, "e": 99, "w": -99 }[step], 0);

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); // true
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])); // false

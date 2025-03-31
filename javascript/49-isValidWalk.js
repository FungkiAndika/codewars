function isValidWalk(walk) {
    if (walk.length !== 10) return false
    let ns = 0
    let we = 0

    for (let s of walk) {
        if (s === 'n') ns += 1
        if (s === 's') ns -= 1
        if (s === 'w') we += 1
        if (s === 'e') we -= 1
    }
    return ns === 0 && we === 0
}
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); // true
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])); // false

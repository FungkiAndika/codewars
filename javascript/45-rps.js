const rps = (p1, p2) => {
    let [r,p,s] = ["rock","paper","scissors"]
    if (p1 == p2) return "Draw!"
    if (p1 == r && p2 == p || p1 == p && p2 == s || p1 == s && p2 == r) {
        return 'Player 2 won!'
    } else {
        return 'Player 1 won!'
    }
}

console.log(rps('rock','paper')); // 'Player 2 won!'
console.log(rps('rock','rock')); // 'Draw!'

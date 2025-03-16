function disemvowel(str) {
    return str.split("").filter(s => s !="a" & s !="u" & s !="i" & s !="e" & s !="o" & s !="A" & s !="U" & s !="I" & s !="E" & s !="O").join("")
}

// ALTER :
// const disemvowel = str => str.replace(/[auieo]/gi,'')
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")); // "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
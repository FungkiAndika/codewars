function isIsogram(str) {
    return new Set(str.toUpperCase()).size == str.length
    // ALTER :
    // return !/(\w).*\1/i.test(str)
}
console.log(isIsogram("Aa"));
console.log(isIsogram("acbdd"));
console.log(isIsogram("a"));
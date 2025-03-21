function isIsogram(str) {
    return new Set(str.toUpperCase()).size == str.length
    // ALTER :
    // return !/(\w).*\1/i.test(str)
}
console.log(isIsogram("Aa")); // false
console.log(isIsogram("acbdd")); // false
console.log(isIsogram("a")); // true
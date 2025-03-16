function getMiddle(s) {
    return s.length % 2 === 0 ? s[s.length/2-1]+s[s.length/2] : s[s.length/2-0.5]
}
// ALTER 1 :
// function getMiddle(s) {
//     const l = s.length
//     return  l % 2 === 0 ? s[l/2-1]+s[l/2] : s[l/2-0.5]
// }
console.log(getMiddle("abcd")); // bc
console.log(getMiddle("abcde")); // c
console.log(getMiddle("a")); // a
console.log(getMiddle("")); // ""

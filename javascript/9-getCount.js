function getCount(str) {
    return str.split('').filter(c => 'aiueo'.includes(c)).length
}
// ARROW FUNCTION
// const getCount = str => str.split('').filter(c => 'aiueo'.includes(c)).length
console.log(getCount("hello world")); // 3
console.log(getCount("hello")); // 2
console.log(getCount("world")); // 1
console.log(getCount("aeiou")); // 5

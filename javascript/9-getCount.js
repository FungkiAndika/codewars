function getCount(str) {
    return str.split('').filter(c => 'aiueo'.includes(c)).length
}
console.log(getCount("hello world"));

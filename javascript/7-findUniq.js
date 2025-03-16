function findUniq(arr) {
    arr = arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n)).toString()
    if (typeof(arr) == String) {
        return parseInt(arr)
    }
    else {
        return parseFloat(arr)
    }
}

console.log(findUniq([ 3,3,"2",2,2])); // 2
console.log(findUniq([ 0, 1, 0])); // 1
console.log(findUniq([ 1, 1, 1, 2, 1, 1])); // 2
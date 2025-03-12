function findUniq(arr) {
    arr = arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n)).toString()
    if (typeof(arr) == String) {
        return parseInt(arr)
    }
    else {
        return parseFloat(arr)
    }
}

console.log(findUniq([ 2,0.411,2,2]));
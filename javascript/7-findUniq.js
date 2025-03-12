function findUniq(arr) {
    arr = arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n)).toString()
    if (typeof(arr) == String) {
        return parseInt(arr)
    }
    else {
        return parseFloat(arr)
    }
}

console.log(findUniq([ 3,3,"2",2,2]));
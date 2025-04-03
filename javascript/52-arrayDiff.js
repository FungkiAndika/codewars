function arrayDiff(a, b) {
    for (let i = 0; i < b.length; i++) {
        const e = b[i];
        if (i != b.length) {
            a = a.filter(c => c != e)
        }
    }
    return a
}
console.log(arrayDiff([1,2], [1])); // [2]
console.log(arrayDiff([1,2,2], [1])); // [2, 2]
console.log(arrayDiff([1,2,2], [2])); // [1]
console.log(arrayDiff([1,2,2], [])); // [1,2,2]
console.log(arrayDiff([], [1,2])); // []
console.log(arrayDiff([1,2,3], [1,2])); // [3]

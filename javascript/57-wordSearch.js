function wordSearch(query, seq) {
    const res = seq.filter(a => 
        /* RegExp(query.toUpperCase()).test(a.toUpperCase()) OR */ 
        a.toUpperCase().includes(query.toUpperCase()))
    return res.length == 0 ? ["Empty"]:res
}

const test  = [
    ["ab", ["za", "ab", "abc", "zab", "zbc"], ["ab", "abc", "zab"]],
    ["aB", ["za", "ab", "abc", "zab", "zbc"], ["ab", "abc", "zab"]],
    ["ab", ["za", "aB", "Abc", "zAB", "zbc"], ["aB", "Abc", "zAB"]],
    ["abcd", ["za", "aB", "Abc", "zAB", "zbc"], ["Empty"]]

]
console.log(test.map(a => wordSearch(a[0],a[1])))
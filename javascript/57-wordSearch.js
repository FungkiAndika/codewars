function wordSearch(query, seq) {
    s = seq.filter(a => 
        /* RegExp(query.toUpperCase()).test(a.toUpperCase()) OR */ 
        a.toUpperCase().includes(query.toUpperCase()))
    return s.length == 0 ? ["Empty"]:s
}

const test  = [
    ["ab", ["za", "ab", "abc", "zab", "zbc"], ["ab", "abc", "zab"]],
    ["aB", ["za", "ab", "abc", "zab", "zbc"], ["ab", "abc", "zab"]],
    ["ab", ["za", "aB", "Abc", "zAB", "zbc"], ["aB", "Abc", "zAB"]],
    ["abcd", ["za", "aB", "Abc", "zAB", "zbc"], ["Empty"]]

]
console.log(test.map(a => wordSearch(a[0],a[1])))
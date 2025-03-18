// function filter_list(l) {
//     return l.filter(a => typeof a === 'number')
// }

// ARROW FUNCTION SCRIPT
const filter_list = l => l.filter(a => typeof a === 'number')
// ALTER :
// const filter_list = l => l.filter(Number.isInteger)
console.log(filter_list([1,2,'aasf','1','123',123])); // [1,2,123]
console.log(filter_list([1,2,'aasf','1','123',123,'a'])); // [1,2,123]
console.log(filter_list(['a','b','c'])); // []
console.log(filter_list([1,'a','b',0,15])); // [1,0,15]
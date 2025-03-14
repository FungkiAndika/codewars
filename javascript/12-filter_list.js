// function filter_list(l) {
//     return l.filter(a => typeof a === 'number')
// }

// ONE LINE SCRIPT
const filter_list = l => l.filter(a => typeof a === 'number')
// ALTER :
// const filter_list = l => l.filter(Number.isInteger)
console.log(filter_list([1,2,'aasf','1','123',123]));

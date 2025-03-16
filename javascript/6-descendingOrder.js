// function descendingOrder(n){
//     return parseInt(String(n).split("").sort((b, a) => a-b).map((x) => parseInt(+x)).join(""))
// }

// ONE LINE FUNCTION
const descendingOrder = (n) => parseInt(String(n).split("").sort((b, a) => a-b).map((x) => parseInt(+x)).join(""))
console.log(descendingOrder(9442660252)); // 9865443220
console.log(descendingOrder(123456789)); // 987654321
console.log(descendingOrder(1)); // 1
console.log(descendingOrder(0)); // 0
console.log(descendingOrder(15)); // 51
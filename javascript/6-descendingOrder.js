// function descendingOrder(n){
//     return parseInt(String(n).split("").sort((b, a) => a-b).map((x) => parseInt(+x)).join(""))
// }

// ONE LINE FUNCTION
const descendingOrder = (n) => parseInt(String(n).split("").sort((b, a) => a-b).map((x) => parseInt(+x)).join(""))
console.log(descendingOrder(9442660252));
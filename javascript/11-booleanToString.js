// function booleanToString(b){
//     if (b == Boolean | b == true) {
//         return b.toString()
//     } else {
//         return b = "false"
//     }
// }

// ONE LINE SCRIPT
// const booleanToString = (b) => b == Boolean | b == true ? b.toString() : b = "false";
const booleanToString = b => (b == true).toString() 
console.log(booleanToString());
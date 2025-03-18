// function booleanToString(b){
//     if (b == Boolean | b == true) {
//         return b.toString()
//     } else {
//         return b = "false"
//     }
// }

// ARROW FUNCTION SCRIPT
// const booleanToString = (b) => b == Boolean | b == true ? b.toString() : b = "false";
const booleanToString = b => (b == true).toString() 
console.log(booleanToString()); // false
console.log(booleanToString(true)); // true
console.log(booleanToString(false)); // false
console.log(booleanToString(1)); // true
console.log(booleanToString(0)); // false
console.log(booleanToString("true")); // false
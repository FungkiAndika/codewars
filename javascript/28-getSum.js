// function getSum(a,b) {
// //      create array                  which length                      fill array with            sum all
// //       with value →                   of array                    min number to max number       in array
// //           ↓        {                     ↓                   }  {             ↓           } {        ↓         }
//     return Array.from({length: Math.max(a,b) - Math.min(a,b) + 1}, (_,i) => Math.min(a,b) + i).reduce((n,i) => n+i)
// }
// ALTER :
function getSum(a,b) {
    // Using a mathematical formula → (count of element) * (a+b) / 2
    // 
    // to positive number 
    //            ↓
    return (Math.abs(a-b) + 1) * (a+b)/2
}
console.log(getSum(8,4));
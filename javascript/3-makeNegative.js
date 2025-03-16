// function makeNegative(num) {
//     j = num * 2
//     return num - j
// }

// const makeNegative = (num) => num > 0 ? -num : num;

// SHORT
function makeNegative(num) {
    return -Math.abs(num)
}
console.log(makeNegative(-0.1)); // -0.1
console.log(makeNegative(0.1)); // -0.1
console.log(makeNegative(0)); // 0
console.log(makeNegative(1)); // -1
console.log(makeNegative(-1)); // -1
console.log(makeNegative(2)); // -2

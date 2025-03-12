// function makeNegative(num) {
//     j = num * 2
//     return num - j
// }

// const makeNegative = (num) => num > 0 ? -num : num;

// SORTER
function makeNegative(num) {
    return -Math.abs(num)
}
console.log(makeNegative(-0.1));

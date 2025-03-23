// function solution(str, ending){
//   const end = ending.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
//   return new RegExp(`${end}$`).test(str)
// }

// ALTER :
solution = (str,ending) => str.endsWith(ending)

console.log(solution('abcde', 'cde')) // true
console.log(solution('vsdabcde', 'abc')) // false
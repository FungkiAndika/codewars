// function longest(s1, s2) {
//   return (s1+s2).split('').sort().join('').replace(/(\w)\1+/g, `$1`)
// }

// ALTER :
longest = (s1,s2) => [...new Set(s1+s2)].sort().join('')
console.log(longest("aretheyhere", "yestheyarehere")); // 'aehrsty'

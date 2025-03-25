/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
*/

// function XO(str) {
//     let arr =  str.toLowerCase().split('')
//     return arr.filter(a => a != 'o'&'x').length == 0 ? arr.filter(a => a == 'x').length == arr.filter(a => a == 'o').length : true
// }

// ALTER :
XO = str => {
    let x = str.match(/x/gi)
    let o = str.match(/o/gi)
    return (x && x.length) === (o && o.length)  
}

console.log(XO("xo")); // true
console.log(XO("xxoo")); // true
console.log(XO("ooxxx")); // false
console.log(XO("xxOo")); // true
console.log(XO("bdvkzdvbiv")); // true

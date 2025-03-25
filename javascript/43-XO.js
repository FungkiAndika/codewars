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

console.log(XO("xo"));
console.log(XO("xxoo"));
console.log(XO("ooxxx"));
console.log(XO("xxOo"));
console.log(XO("bdvkzdvbiv"));

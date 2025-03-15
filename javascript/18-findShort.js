// function findShort(s){
//     return Math.min(...s.split(' ').filter(a => a.length > 0).map(n => n.length))
// }

// ONE LINE
const findShort = (s) => Math.min(...s.split(' ').filter(a => a.length > 0).map(n => n.length))
console.log(findShort("hda doah  uas paa w  asjasfj asoj fa afjafasj"));

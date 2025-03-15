// function findShort(s){
//     return Math.min(...s.split(' ').filter(a => a.length > 0).map(n => n.length))
// }

// ONE LINE (no include " ")/( higher than 0 )
// const findShort = (s) => Math.min(...s.split(' ').filter(a => a.length > 0).map(n => n.length))
// ALTER (include " ") :
const findShort = s => Math.min(...s.split(' ').map(a => a.length ))
console.log(findShort("hda doah uas paa w asjasfj asoj fa afjafasj"));

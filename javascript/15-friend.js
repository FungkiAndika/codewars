// function friend(friends){
//     return friends.filter(s => s.length == 4)
// }

//  ONE LINE
const friend = (friends) => friends.filter(s => s.length == 4)
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])); // ["Jimm", "Cari", "aret"]

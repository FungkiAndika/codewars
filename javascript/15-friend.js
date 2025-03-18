// function friend(friends){
//     return friends.filter(s => s.length == 4)
// }

//  ARROW FUNCTION
const friend = (friends) => friends.filter(s => s.length == 4)
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])); // ["Jimm", "Cari", "aret"]

/*
    To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
*/
function openOrSenior(data){
    return data.map(a => a[0] >= 55 && a[1] > 7 ? 'Senior': 'Open')
}
console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])) // ['Open','Open','Senior','Open','Open','Senior']
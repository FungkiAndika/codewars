function toCamelCase(str) {
    const regex = RegExp(/[_-]/) 
    return  str.split(regex)[0]+str.split(regex).map( a => a.charAt(0).toUpperCase()+a.slice(1)).slice(1).join("")
}

test = [
    ['', ''],
    ["the_stealth_warrior", "theStealthWarrior"],
    ["The-Stealth-Warrior", "TheStealthWarrior"],
    ["A-B-C", "ABC"]
]
console.log(test.map(a => toCamelCase(a[0])));

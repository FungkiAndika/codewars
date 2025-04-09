// function validatePIN (pin) {
//     l = pin.split('').map(a => parseInt(a)).join('')
//     return typeof parseInt(l) == 'number' && l.length == pin .length ? pin.length == 4|| pin.length == 6 : false
// }

// ALTER :
const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin)

// Regex: /^(\d{4}|\d{6})$/
// ------------------------------------------
// ^         : Start of the string
// (         : Start of group
// \d{4}     : Match exactly 4 digits, \d for digit character
//    |      : OR
//  \d{6}    : Match exactly 6 digits, \d for digit character
//       )   : End of group
// $         : End of the string
//
// This regex matches a string that is either:
// - Exactly 4 digits (e.g., "1234")
// - OR exactly 6 digits (e.g., "654321")
// No other characters are allowed before or after.



console.log(validatePIN('3766'));


// true
console.log(validatePIN("1234"),true, "Wrong output for '1234'");
console.log(validatePIN("0000"),true, "Wrong output for '0000'");
console.log(validatePIN("1111"),true, "Wrong output for '1111'");
console.log(validatePIN("123456"),true, "Wrong output for '123456'");
console.log(validatePIN("098765"),true, "Wrong output for '098765'");
console.log(validatePIN("000000"),true, "Wrong output for '000000'");
console.log(validatePIN("123456"),true, "Wrong output for '123456'");

// false
console.log(validatePIN("1"),false, "Wrong output for '1'")
console.log(validatePIN("12"),false, "Wrong output for '12'")
console.log(validatePIN("123"),false, "Wrong output for '123'")
console.log(validatePIN("12345"),false, "Wrong output for '12345'")
console.log(validatePIN("1234567"),false, "Wrong output for '1234567'")
console.log(validatePIN("-1234"),false, "Wrong output for '-1234'")
console.log(validatePIN("1.234"),false, "Wrong output for '1.234'")
console.log(validatePIN("-1.234"),false, "Wrong output for '-1.234'")
console.log(validatePIN("00000000"),false, "Wrong output for '00000000'")
console.log(validatePIN("090909"),true, "Wrong output for '090909'");


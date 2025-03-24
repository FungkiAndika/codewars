function alphabetPosition(text) {
    return text.replace(/[^a-z]/gi, '').split('').map(a => a.toUpperCase().charCodeAt(0) - 64).join(' ')
}
console.log(alphabetPosition("'abcd'e f((%&&%*%^%$itf] g")); // '1 2 3 4 5 6 9 20 6 7'
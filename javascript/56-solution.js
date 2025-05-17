function solution(text, markers) {
    // const escapeRegExp = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // const regex = new RegExp(`[${markers.map(escapeRegExp).join("|")}]`, "g")
    // return !markers? text+" ": text.split("\n")
    // .map((line) => {
    //     return markers.some(char => line.includes(char))?line.split(regex)[0]:line
    // }).join("\n")

    if (markers.length == 0) {
        return text.trimEnd()
    } else {
        if (markers.length > 1) {
            return text
        } else {
            return text.split('\n').map(a =>
                a.indexOf(markers) >= 0 ? 
                a.slice(0,a.indexOf(markers)-(a.length)).trimEnd() : a.trimEnd( )).join("\n")
        }
     }
}

const tests = [
    [ 'aa bb cc', [], 'aa bb cc'],
    ['aa bb cc  ', [], 'aa bb cc'],
    ['  aa bb cc', [], '  aa bb cc'],
    ['  aa # bb # cc  ', [], '  aa # bb # cc'],

    ['aa bb cc', ['#'], 'aa bb cc'],
    ['aa bb # cc', ['#'], 'aa bb'],
    ['aa# bb cc', ['#'], 'aa'],
    ['aa #bb cc', ['#'], 'aa'],
    ['aa # bb # cc', ['#'], 'aa'],
    ['#aa bb cc', ['#'], ''],

    ['#aa bb\ncc dd', ['#'], '\ncc dd'],
    ['aa # bb\ncc dd', ['#'], 'aa\ncc dd'],
    ['aa bb\n#cc dd', ['#'], 'aa bb\n'],
    ['aa bb\ncc # dd', ['#'], 'aa bb\ncc'],
    ['aa bb\ncc dd#', ['#'], 'aa bb\ncc dd'],

    ['aa bb\ncc dd', ['#', '!'], 'aa bb\ncc dd'],
    ['aa # bb\ncc dd', ['#', '!'], 'aa\ncc dd'],
    ['aa bb\ncc ! dd', ['#', '!'], 'aa bb\ncc'],
    ['#aa bb\n!cc dd', ['#', '!'], '\n'],
    ['aa ! bb\ncc # dd', ['#', '!'], 'aa\ncc'],
    ['aa bb#\ncc dd!', ['#', '!'], 'aa bb\ncc dd'],

    ['aa + bb\ncc - dd\nee * ff', ['+', '-', '*'], 'aa\ncc\nee'],
    ['aa / bb\ncc ^ dd\nee $ ff', ['/', '^', '$'], 'aa\ncc\nee'],
  ];
console.log(tests.map(a => solution(a[0],a[1]) === a[2]?"[*] ["+solution(a[0],a[1])+"]":"[x] ["+solution(a[0],a[1])+"] ["+a[2]+"]"));
console.log("BENAR: "+tests.map(a => solution(a[0],a[1]) === a[2]).filter(a => a === true).length+", SALAH: "+tests.map(a => solution(a[0],a[1]) === a[2]).filter(a => a === false).length);



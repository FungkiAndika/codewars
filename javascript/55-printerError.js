const printerError = (a) => {
    return a.split("")
    .filter(d => RegExp(/([a-m])/).test(d) == false)
    .join("").length + "/" + a.length.toString()
}
console.log(printerError("aaabbbbhaijjjm"));

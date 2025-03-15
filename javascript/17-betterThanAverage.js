// function betterThanAverage(classPoints, yourPoints) {
//     return classPoints.reduce((a,b) => a+b)/classPoints.length < yourPoints
// }

const betterThanAverage = (classPoints, yourPoints) => classPoints.reduce((a,b) => a+b)/classPoints.length < yourPoints
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
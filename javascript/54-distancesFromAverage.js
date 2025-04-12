function distancesFromAverage(arr){
    const average = arr.reduce((a,b) => (a+b))/arr.length
    return arr.map(a => parseFloat((average - a).toFixed(2)))
}
console.log(distancesFromAverage([55, 95, 62, 36, 48]), [4.2, -35.8, -2.8, 23.2, 11.2])
console.log(distancesFromAverage([1, 1, 1, 1, 1]), [0, 0, 0, 0, 0])
console.log(distancesFromAverage([1, -1, 1, -1, 1, -1]), [-1.0, 1.0, -1.0, 1.0, -1.0, 1.0])
console.log(distancesFromAverage([1, -1, 1, -1, 1]), [-0.8, 1.2, -0.8, 1.2, -0.8])
console.log(distancesFromAverage([2, -2]), [-2.0, 2.0])
console.log(distancesFromAverage([1]), [0])
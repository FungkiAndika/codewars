function divisors(integer) {
    const y = Array.from({length: integer/2}, (_, index) => index +1).filter((a) => integer % a === 0).filter(b => b > 1)
    return y.length == 0 ? integer + " is prime": y
}
console.log(divisors(8)); // [2, 4]
console.log(divisors(15)); // [3, 5]
console.log(divisors(13)); // 13 is prime
console.log(divisors(12)); // [2, 3, 4, 6]
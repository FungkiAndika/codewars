function divisors(integer) {
    const y = Array.from({length: integer/2}, (_, index) => index +1).filter((a) => integer % a === 0).filter(b => b > 1)
    return y.length == 0 ? integer + " is prime": y
}
console.log(divisors(8));
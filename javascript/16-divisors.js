function divisors(integer) {
    const y = Array.from({length: integer/2}, (_, index) => index +1)
    return y.filter((a) => integer % a === 0).filter(b => b > 1).length == 0 ? integer + " is prime": y.filter((a) => integer % a === 0).filter(b => b > 1)
}
console.log(divisors(8));
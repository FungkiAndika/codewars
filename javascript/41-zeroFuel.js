const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (mpg*fuelLeft) >= distanceToPump
};

console.log(zeroFuel(50,25,2)); // true
console.log(zeroFuel(50,15,1)); // false


// OR 

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => (mpg*fuelLeft) >= distanceToPump
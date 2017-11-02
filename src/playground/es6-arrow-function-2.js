// arguments object is no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}

//console.log(add(5, 1, 100, 300))

// this keyword is no longer bound. 

const user = {
    name: "Mike",
    cities: ["Preston", "Mamchester", "Dublin"],
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city);     
    }
};
user.printPlacesLived();

const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((result) => result * this.multiplyBy);
    }
}
console.log(multiplier.multiply());

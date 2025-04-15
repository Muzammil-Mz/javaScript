function Car() {
    this.name = "Mustang";
}

// add prototype property
Car.prototype.color = "Red";

// create object
let c1 = new Car();

// access prototype object of c1
console.log(Object.getPrototypeOf(c1));
//prototypes allow properties and methods to be shared among instances of the function or object.
//color is property
// method can be function
// Output: { color: 'Red' }
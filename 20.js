//OOP :object oriented programming
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  drive() {
    console.log(`${this.brand} ${this.model} is driving!`);
  }
}

const car1 = new Car("Tesla", "Model 3");
car1.drive(); // Tesla Model 3 is driving!

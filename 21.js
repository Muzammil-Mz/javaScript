// function Person() {
//     this.name = 'John',
//         this.age = 23
// }

// // creating objects
// const person1 = new Person();
// const person2 = new Person();

// // adding property to constructor function
// Person.prototype.gender = 'male';

// // prototype value of Person
// console.log(Person.prototype); //gives {gender:"male"}

// // inheriting the property from prototype
// console.log(person1.gender); //male
// console.log(person2.gender)//male

// function Person() {
// }

// adding property
// Person.prototype.age = 23

// const person1 = new Person();
// Person.prototype.name = 'Peter';

// console.log(person1.name); // Peter
// console.log(person1.age); // 23

function Person() {
  this.name = "John";
}

// adding a prototype
Person.prototype.num = 23;

// creating object
const person = new Person();

// accessing prototype property
console.log(person);

console.log(person.__proto__); // { age: 24 }

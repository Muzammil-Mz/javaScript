//counstructor function

// function Name() {
//   (this.name = "Suhail"), (this.age = 20);
// }

// const name = new Name();

// console.log(name); //Name { name: 'Suhail', age: 20 }

// function date(day, month, year, total) {
//   this.day = new Date().toLocaleString("en-us", { day:"numeric" });
//   this.month = new Date().getMonth() + 1;
//   this.year = new Date().getFullYear();
//   this.total = new Date().toLocaleString("en-us", {
//     timeZone: "asia/kolkata",
//   });
// }

// let dates = new date();
// console.log(dates);

// function Tariq(date, month, year) {
//   this.date = new Date().getDate();
//   this.month = new Date().getMonth() + 1;
//   this.year = new Date().getFullYear();
// }

// const tariq = new Tariq();
// const date2 = new Tariq();
// console.log(tariq);
// console.log(date2);

// console.log(tariq.date);
// console.log(tariq.month);

// console.log(date2.date);
// console.log(date2.month);

// function Tariq(date, month, year) {
//   this.date = date;
//   this.month = month;
//   this.year = year;
// }

// const tariq = new Tariq("11, 02, 2002");
// const date2 = new Tariq("01, 10, 2022");
// console.log(tariq);
// console.log(date2);

// console.log(tariq.date);
// console.log(tariq.month);

// console.log(date2.date);
// console.log(date2.month);

function Person() {
  (this.name = "John"), (this.age = 23);
}

// creating objects
let person1 = new Person();
let person2 = new Person();
person1.gender = "male";
//can also add key value using prototype.
Person.prototype.address = "mbnr";
console.log(person1); //only shows name,age,gender not address
console.log(person1.address); //only shows address

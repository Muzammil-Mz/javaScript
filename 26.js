// let student={
//     fname:"mz"
// }

// student.greet=function(){
//     console.log("hello")
// }

// student.greet() //hello

// let num=5.4549
// let round=num.toFixed(2)
// console.log(round);

//constructor function with parametres

// function data(datas_name,datas_age,datas_classs){
//     this.name=datas_name,
//     this.age=datas_age,
//     this.classs=datas_classs,
//     this.details=function(){
//         return (`hello im ${this.name} my  age is ${age} in ${classs} `)
//     }
// }

// const person1= new data("mz",22,"52")
// console.log(person1.details);

// function names() {
//   (this.name = "mz"), (this.roll = 64);
// }

// let person1 = new names();
// names.prototype.age = 58;
// console.log(names());


//
function car(){
    console.log("car is red");
}

car.prototype.color="red"
car.prototype.drive=function(){
    console.log("yes im driving");
}

car.prototype.drive()
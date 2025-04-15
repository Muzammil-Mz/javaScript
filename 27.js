//model for accessing paramteres of funct
//pprototype inheritance
function car(name, color) {
  (this.name = name), (this.color = color);
}

car.prototype.year = "333";
let c1 = new car("bmw", "red");
// console.log(`${c1.name} is brande new in ${c1.year}`); //bmw is brande new in 333

car.prototype.drive = function () {
  console.log("oinqeog");
};

c1.drive(); //function accessed via c1



//prototype chainning
// function cars(){
//     this.name="bmw"
// }

// car.prototype.color="red"
// let c2=new cars()
// // console.log(`welcome to ${c2.name} series`)



// ------
// console.log(Object.getPrototypeOf(c2));




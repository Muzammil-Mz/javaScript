

function data(name) {
  this.name = name;
}

let p2 = new data("raj");
console.log(p2.name);

//es6
// constructor function
class person {
  constructor(name) {
    this.name = name;
  }
}

let p1 = new person("john");
console.log(p1.name);



const hospital={
    doctors:55,
    patients:100
}


// //previous destrucutree
// let doctors=hospital.doctors
// let patients=hospital.patients
// console.log(doctors,patients);

let {doctors,patients}=hospital
console.log(doctors);
console.log(patients);



//rest paramter - used when infinite arguments to represent in array

function call(a,b,...c){
    console.log("a:",a);
    console.log("b:",b);
    console.log("c:",c);
}

call(1,2,3,4,5)





//spread operator used to spread out elements of iterables such as obj, arrays, string
let numbers=[1,2,3]
console.log(numbers);
console.log(numbers[0], numbers[1], numbers[2])
console.log(...numbers);


//spread operator with array
let fruits=["apple","banana"]
let d=["custard",...fruits]
console.log(d);


//clone using spread operator
let local=[...fruits]
console.log(local);


//with obj

let stud1={
    name:"mz",
    class:"44"
}
let stud2={
    name:"zm",
    class:55
}

let total={...stud1, ...stud2}
console.log(total);
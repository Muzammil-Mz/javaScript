let namef = [
  ["mz", "xth"],
  ["raj", 25],
];
for (let i = 0; i < namef.length; i++) {
  for (let j = 0; j < namef[i].length; j++) {
    console.log(namef[i][j]);
  }
}

//for each
let students = [
  ["jack", 22],
  ["raj", 35],
];
// students.forEach((x)=>{
//     x.forEach((data)=>{31q
// console.log(data);
//     })

// })

students.forEach((x) => {
  x.forEach((data) => {
    console.log(data);
  });
});

//for of
for (let x of students) {
  for (let j of x) {
    console.log(j);
  }
}

// for in

let names = {
  name: "mz",
  class: "5th",
};

for (let key in names) {
  console.log(`${key} => ${names[key]}`);
}

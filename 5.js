// let zero = 0;
// let minus = -1;
// let plus = 1;

// if (zero) {
//   console.log("This is zero"); // 0 is false condition it will not enter the if statment
// }

// if (minus) {
//   console.log("This is -1"); // this is not zero so it will print and go to true if statement
// }

// if (plus) {
//   console.log("This is 1"); // this is not zero so it will print and go to true if statement
// }

//nested if else
// let x = 90;
// if (x == 90) {
//   return console.log("1st class");
// }
// if (x >= 40) {
//   if (x >= 80) {
//     console.log("passed with distinction");
//   } else {
//     console.log("passed");
//   }
// } else {
//   console.log("failed");
// }

//sum of natural numbers
// let sum=0
// let n=100

// for(let i=1;i<=n;i++){
//   sum+=i
// }

// console.log(sum);

//5table

// for (let x=1;x<=10;x++){
//   console.log(`${5}x${x}=${5*x}`);
// }

//iterate through fruits

let fruits = ["apple", "ban", "cust"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// let i = 1;

// always true condition
// while(i < 5) {
//     console.log(i);
//     i++ //become infiniete loop of ln 62 absent
// }

for (let x = 0; x <= 2; x++) {
  for (let y = 1; y <= 3; y++) {
    if (y == 1) {
      continue;
    }
    console.log(x, y);
  }
}


let fruit = "banana";

switch (fruit) {
    case "apple":
        console.log("Apple case");
    case "banana":
        console.log("Banana case");
    case "orange":
        console.log("Orange case");       
    default:
        console.log("Unknown fruit");
}
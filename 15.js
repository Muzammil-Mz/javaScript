//countdown

// function countdown(number) {
//   console.log(number);
//   let newNumb = number - 1;
//   if (newNumb > 0) {
//     return countdown(newNumb);
//   }
// }

// console.log(countdown(10));

//factorial

// function fact(x) {
//   if (x == 0) {
//     return 1;
//   } else {
//     return x * fact(x - 1);
//   }
// }

// console.log(fact(5));

// function countDown(x) {
//   if (x > 0) {
//     console.log(x);
//     countDown(x - 1);
//   }
//   return "done";
// }

// countDown(10);

function fact(x) {
  if (x == 0) {
    return 1;
  } else {
    return x * fact(x - 1);
  }
}

console.log(fact(5));



// setTimeout(function(){
//     console.log("hello world");
// },3000)


(function (){
    console.log("hello woeld");
})()    
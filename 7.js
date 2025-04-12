// //recursion

// function countDown(number) {
//   console.log(number);

//   let newNumber = number - 1;
//   if (newNumber > 0) {
//     countDown(newNumber);
//   }
// }

// countDown(10);

// function countDown(number) {
//   console.log(number);

//   let newNumber = number - 1;
//   if (newNumber > 0) {
//     countDown(newNumber);
//   }
// }
// countDown(3);

function factorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

console.log(factorial(5));

let print = function (numb) {
  if (numb === 0) {
    return 1;
  } else {
    return numb * factorial(numb - 1);
  }
};

console.log(print(5));

function countDown(numb) {
  console.log(numb);
  let newNumb = numb - 1;

  if (newNumb > 0) {
    countDown(newNumb);
  }
}

countDown(5);


function fact(numb){
    if (numb==0){
        return 1
    }
    else{
        return numb*factorial (numb-1)
    }
}

console.log(fact(5));



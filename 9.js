function sumNumbers(num1, num2) {
    let total = num1 + num2;
  //   return total;
  console.log(total);
  
  }   
  
  // sumNumbers(4, 7); // 11
  
  let storeFunction = sumNumbers(4,7);
  console.log(storeFunction + 1);


  //anonymous function 
  setTimeout(function() {
    console.log("hello");
  }, 3000);

  console.log("this print may take time ");


  (function (){
    console.log("hello");
  })();
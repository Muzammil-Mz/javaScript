//call backs : function calling as a argumetn in another function is called callback

// function greet(name, data) {
//   console.log(`hello ${name}`);
//   data();
// }

// function greet2() {
//   console.log("hello");
// }

// greet("peter", greet2);

function processUserInput(callback) {
  let name = "Muzammil";
  callback(name);
}

function displayName(userName) {
  console.log(`User Name is: ${userName}`);
}

processUserInput(displayName);

function greet() {
  console.log("hellow");
}

function sayname(name) {
  console.log(`hey ${name}`);
}

// setTimeout(sayname("rajj"), 2000);
setTimeout(() => sayname("rajj"), 2000);
greet();



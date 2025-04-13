//date

// let y = new Date(2002);
// console.log(y);

// let z=new Date ("2025 april 13 03:21:55")
// console.log(z);

//fun with dates
let x = new Date();
console.log(x);
console.log(x.getDate());
console.log(x.getTime());
// console.log(x.getFullYear());
// console.log(x.getMonth());
// console.log(x.getDate());
// console.log(x.getDay());
// console.log(x.getTime());
// console.log(x.getHours());
// console.log(x.getMinutes());
// console.log(x.getSeconds());
// console.log(x.getMilliseconds());
// console.log(x.getTimezoneOffset());
// console.log(x.getUTCDate());
// console.log(x.getUTCDay());
// console.log(x.getUTCFullYear());
// console.log(x.getUTCHours());
// console.log(x.getUTCMilliseconds());
// console.log(x.getUTCMinutes());
// console.log(x.getUTCMonth());
// console.log(x.getUTCSeconds());

let date = new Date().toLocaleString(
  "en-us",
  { weekday: "long" },
  { timeZone: "Asia/Kolkata" }
);
console.log(date);

let now = new Date().toLocaleString("en-us", {
  month: "long",
  // day: "numeric",
  // year: "numeric",
  timeZone: "Asia/Kolkata",
  weekday: "long",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true,
  dayPeriod: "short",
  day: "2-digit",
  year: "2-digit",
});
console.log(now);

let noww = new Date().toLocaleString("en-us", {
  timeZone: "Asia/kolkata",
});
console.log(noww);

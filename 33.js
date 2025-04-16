// map is similar to object contain key value pair
let map1 = new Map();

// insert key-value pair
map1.set("info", { name: "Jack", age: 26 });
console.log(map1); // Map {"info" => {name: "Jack", age: 26}}       
//Map(1) { 'info' => { name: 'Jack', age: 26 } }

let map2 = new Map();
map2.set("info", { names: "mz", age: 26 });
console.log(map2);
//Map(1) { 'info' => { names: 'mz', age: 26 } }


//using object in map
let map3=new Map()
let obj={}

map3.set(obj,{name:"zz",age:688})
// console.log(map3); 
// or
console.log(map3.get(obj));
// Map(1) { {} => { name: 'zz', age: 688 } }    



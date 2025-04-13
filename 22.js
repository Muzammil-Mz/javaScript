const obj = {
    name: "Suhail",
    age: 20,
    isAlive : true
}
console.log(obj);

console.log(Object.keys(obj));
console.log(Object.values(obj)); 
console.log(Object.entries(obj));
console.log(Object.getOwnPropertyNames(obj));

//{ name: 'Suhail', age: 20, isAlive: true }
// [ 'name', 'age', 'isAlive' ]
// [ 'Suhail', 20, true ]
// [ [ 'name', 'Suhail' ], [ 'age', 20 ], [ 'isAlive', true ] ]
// [ 'name', 'age', 'isAlive' ]
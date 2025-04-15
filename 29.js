//adding zm at 1st index 0 position creates new elemetn
// let students=[["raj",24],["mz","5"]]
// students.splice(1,0,0["zm"])
// console.log(students);

//inorder to add zm beside mz
// let students = [
//   ["raj", 24],
//   ["mz", "5"],
// ];
// students[1].push("zm");
// console.log(students);


let students=[["raj",24],["mz","5"]]
students[1].splice(1,0,"zm") //zm added students[1] is target 1 is the position 
console.log(students);
//[ [ 'raj', 24 ], [ 'mz', 'zm', '5' ] ]
students[1].splice(2,0,"hr") //students[1] is the target whereas hr is the word to be added and 2 is the the index i.e at position "5"
console.log(students); 
// [ [ 'raj', 24 ], [ 'mz', 'zm', 'hr', '5' ] ]

students[1].splice(2,1) //students[1] is the target whereas 2 indexed one element is to removed that is "hr"
console.log(students); 


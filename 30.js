let namef=[["mz","xth"],["raj",25]]
for (let i=0;i<namef.length;i++){
    for (let j=0;j<namef[i].length;j++){
        console.log(namef[i][j]);
    }
    
}


//for each
let students=[["jack",22],["raj",35]]
// students.forEach((x)=>{
//     x.forEach((data)=>{
// console.log(data);
//     })

    
// })

students.forEach((x)=>{
    x.forEach((data)=>{
        console.log(data);
    })
})



//for of
for (let x of students){
    for (let j of x){
        console.log(j);
    }
}
const obje = {
        name: "Suhail",
        age: 23,
        isAlive: true,
        call: function () {
            return "Hello I am a Method"
        }
    }
    
    console.log(obje);
    console.log(obje.call()); 
//{ name: 'Suhail', age: 23, isAlive: true, call: [Function: call] }
// Hello I am a Method

const obj = {
        name: "Suhail",
        age: 23,
        isAlive: true,
        fun() {
            return "Hello I am a Method"
        }
    }
    
    console.log(obj);
    console.log(obj.fun());


    const object = {
        name: "Suhail",
        age: 23,
        isAlive: true,
        fun() {
            return `I am ${this.name} and my age is ${this.age} and i am alive is ${this.isAlive} `
        }
    }
    
    console.log(object);
    console.log(object.fun());
    // Output
    // { name: 'Suhail', age: 23, isAlive: true, fun: [Function: fun] }
    // I am Suhail and my age is 23 and i am alive is true 


    
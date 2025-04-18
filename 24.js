let a = "hello";

function greet() {
    // change value of global variable a
    a = 3;
}

console.log(a)



// Program showing block-scoped concept

// global variable
let a = "Hello";

function greet() {

    // local variable
    let b = "World";

    console.log(a + " " + b);

    if (b == "World") {

        // block-scoped variable
        let c = "hello";

        console.log(a + " " + b + " " + c);
    }

    // variable c cannot be accessed here
    console.log(a + " " + b + " " + c);
}

greet();
//1. Write a function that takes an argument and returns that argument.

//ES5
function (x) {
    return x;
}

//ES6
const identity = x => x;

// 2. Write two binary functions, `add` and `mul`, that take two numbers and return their sum and product.

//ES5
function add (x,n){
    return x + n
}
function mul (x,n){
    return x * n
}
//ES6
const add = (x,n) => x+n
const mul = (x,n) => x*n


// 3. Write a function that takes an argument and returns a function that returns that argument.

//ES5
function x (y) {
    return y
}

//ES6

const x = y => y

// 4. Write a function that adds from two invocations.

//ES5
function add (x){
    return function (y){ //invoke 1
        return x + y       //invoke 2
    }
}

//ES6
const add = x => y => (x+y)

// ===================INCORRECT ATTEMPT=================
// //ES5
// function add (x,y){
//     function func1 (x){
//         return x
//     }
//     function func2 (y){
//         return y
//     }
//     return func1 + func2
// }

// //ES6
// const add = (x,y) => x,y => func1 + func2
// ===============END INCORRECT ATTEMPT=================

// 5. Write a function that takes a binary function, and makes it callable with two invocations.

//ES5
function binary(binaryFunction){
    return function (x) {   // not an invocation
        return function (y){    //invocation 1
            return binaryFunction(x,y); //invocation 2
        }

    }
}
//ES6
    const binary = 
        binaryFunction => 
            x =>
                y =>
                    binaryFunction(x,y);

// ===================INCORRECT ATTEMPT=================
// function binary (func1, func2) {
//     return func1, func2
    
// }

//ES6
// const binary = binaryFunction => function = x => function = y => binaryFunction = (x,y)
// ===============END INCORRECT ATTEMPT=================

// 6. Write a function that takes a function and an argument, and returns a function that can supply a second argument.

//ES5
function currycomb(func1, x){   //takes a function and an argument
    return function(y) {
        return func1(x,y);  //returns a function that can supply a second argument.
    }
}

// ===================INCORRECT ATTEMPT=================
// function firewall(func1, x) {    //MISSING MIDDLE LOGIC
//     return func1(x,y);
// }
// ===============END INCORRECT ATTEMPT=================
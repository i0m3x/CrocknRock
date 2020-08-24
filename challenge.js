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
        return function (y){    // not an invocation
            return binaryFunction(x,y); //invocation 1 and 2 -CONSULT TUTOR
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

//ES6
const currycomb = (func1, x) => y => func1 = (x,y);

//http://www.crockford.com/javascript/www_svendtofte_com/code/curried_javascript/index.html
// ===================INCORRECT ATTEMPT=================
// function firewall(func1, x) {    //MISSING MIDDLE LOGIC
//     return func1(x,y);
// }
// ===============END INCORRECT ATTEMPT=================

// 7. Without writing any new functions, show three ways to create the `inc` function. Using functions from the previous six problems.

//ES5
function add (x,n){
    return x + n
}

function add (x){
    return function (y){
        return x + y
    }
}

function curry (fn, x){
    return function (x){
        return fn (x,y)
    }
}

//ES6
const add = (x,n) =>  x + y

const add = x => y => (x+y)

const curry = (fn,x) => y => fn(x,y)


//below is an incorrect attempt of above
// function curry (fn, x){
//     return (x){
//         return (fn,y)
//     }
// }
// ===================INCORRECT ATTEMPT for problem 7=================

// function binary(binaryFunction){    //had a feeling I needed this
//     return function (x) {   
//         return function (y){   
//             return binaryFunction(x,y); 
//         }

//     }
// }
// // ++++++++ DIDN'T THINK TO ADD THESE, BUT THEY ARE NEEDED

// function add (x){
//     return function (y){    //for the counter
//         return x + y  
//     }
// }

// function currycomb(func1, x){   //for calling the counter and adding to it
//     return function(y) {
//         return func1(x,y); 
//     }
// }


// // ===============FUNCTIONALITY IMPOSED=================
// function increment (){
//     n = 0   
//     n++     //this is what the second function above does - add
//     return n;   //this is what currycomb does
//     }
// // ===============END =================

// //ES6 CORRECT ANSWER BELOW (TAKING FROM THREE FUNCTIONS ABOVE BUT WITHIN 7)
// function curry(binaryFunction, x){
//     return function(y){
//         return binaryFunction(x,y);
//     }
// }
// ===============END INCORRECT ATTEMPT=================
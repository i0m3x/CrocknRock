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
function add (x,y){
    function func1 (x){
        return x
    }
    function func2 (y){
        return y
    }
    return func1 + func2
}

//ES6
const add = (x,y) => x,y => func1 + func2
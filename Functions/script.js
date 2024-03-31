//Functions in Javascript
//Q1 - What is function declarations?

function square(num) {
  return num * num;
}

//Q2 - What is function expression?

const square1 = function (num) {
  //as this function has no name it is called anonyomous function but it can be passed on any variable or can be used as callback function as well
  return num * num;
};

//Q3 - What is First Class Functions?
//We can pass a function as an argument within a function
function displaySquare(fn) {
  console.log("Square is " + fn(5));
}

displaySquare(square);

//Q4 - What is IIFE?  (Immedicately invoked function expression)

(function square2(num) {
  console.log("IIFE Execution\n");
  console.log(num * num);
})(5);

//Question based on IIFE

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1); // Output will be 1 here mostly if we think this should return us as undefined as x is not present in internal IIFE but no if x is not present in internal IIFE it will search in its parent scope this happens because of closures.

//Bsically first here our parent IIFE is being executed which is again returning an IIFE and this clousre IIFE is logging parent fucntion argument hence the child IIFE can access this argument from parent IIFE.

//Basically for now closures are ability of a function to access variables and function which are lexically out of its scope is called closures

//Q4 - Function Scope?

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"

//Interview Question on this

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

//Very imp if we use let as we know let has block scope so the output will be 0 1 2 3 4 but if we use var instead of let the var doesnt has block scope hence it will give output as 5 five times let will create a new copy of i for each iteration of block but same is no applicable to var hence after the loop cmpletes the var i will have 5 and all settimeout callbacks will use i(5) hence it prints 5 five times.

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

//To achieve the same result as let we can use below approach by giving new function scope each time and execute immediately so each scope will have cureent value of i
// for (var i = 0; i < 5; i++) {
//   (function (index) {
//     setTimeout(function () {
//       console.log(index);
//     }, index * 1000);
//   })(i);
// }

//Q5 - What is Function Hoisting

//for var declaration and initialization both are hoisted
// for let and const only declaration is hoisted
//for function declaration and initialization both are hoisted

// In JavaScript, function declarations are indeed hoisted, similar to var declarations. When you declare a function using the function keyword, the entire function definition is moved to the top of its containing scope during the compilation phase. This means that you can call the function before its actual declaration in the code, and it will still work.

//Also remember a very crucial part that hoisting in var and function works differently, for example if we call a var x without initializing it will give us undefined as in case of var declaration and initialiaztion both are hoisted but unless we didnt have initialized the var x with some value it will be undefined but in function it is completely hoisted(i.e completely copied in global scope) hence it will not give any undefined or something like that issue.

//var with globbal scope example
name1();

function name1() {
  console.log("Hello_name1" + x);
}

var x = 20;

name1();

//var with function scope example
name2();

function name2() {
  console.log("Hello_name2" + x1);
  var x1 = 20;
  console.log("Hello_name2" + x1);
}

//Interview Question on Function Hoisting

var x1 = 21;

var fun = function () {
  console.log("Function_Hoisting" + x1);
  var x1 = 20;
};

fun(); //Output for this will be undefined as it creates a seperate execution context for function/local scope so here in global scope it has 21 but in function scope as we are reinitializing it will be undefined as we are initializing it after logging. Always remember if we have reinitialized/redeclared a global scoped var(var/let) again inside  a functional scope so it will check for functional scope var

//The below example will thorw error as we are using let here  script.js:137 Uncaught ReferenceError: Cannot access 'a1' before initialization
// let a1 = 2000;

// var scope = function () {
//   console.log("Scopewala" + a1);
//   let a1 = 200;
// };
// scope();

//Q6 - Params vs Arguments

function multiply(...nums) {
  //...nums here is rest operator
  console.log("Params example " + nums[0] * nums[1]);
}

var arr = [5, 6];
multiply(...arr); //...arr here it is called spread operator

//Interview Question on this

// const fn = (a,...numbers,x,y)=>{
//   console.log(x,y)
// } //this will throw error as a rest parameter must be last in  a parameter list always remember this

//Corrected version of above code is

const fn = (a, x, y, ...numbers) => {
  console.log(x, y, numbers);
}; //this will throw error as a rest parameter must be last in  a parameter list always remember this

fn(5, 63, 25, 12, 144); //5 63 25 [ 12, 144 ]

//Q7 - Callback Function

document.addEventListener("click", (params) => console.log("Hii"));

//Q7 - Arrow Function

//Always remember anonyomous function or function expressions are not hoisted similar o function declaration with

function declaration_fun() {
  //This is function with declaration
  return "Hello";
}

anonyomous_fun = () => console.log(Hello); //This is function without declaration or anonyomous function it will not hoisted same as declaration_fun above refer Hoisting in Functions from docx

//Q7 - Arrow Function Vs regular function

// a. syntax
// b. Implicit return keyword in arrow function if we have one liner logic we can avoid return please note if we have used {} in  arrow then we have to give return otherwise we can ignore return in arrow function.

// c. we can use arguments in declaration function without declaraing params but same is not possible in arrow function

function arg() {
  console.log("Declaration");
  console.log(arguments);
}

// arg(1, 2, 3); //this will execute without errors
// (() => console.log(arguments))(1, 2, 3); //This will throw error script.js:195 Uncaught ReferenceError: arguments is not defined

//d. "this" keyword

let user = {
  username: "Human",
  rc1: () => console.log("hi " + this.username), //this will return undefined as arrow function cant refer to their object from which they are being called they refer "this" to global object hence output will be undefined
  rc2() {
    console.log("hi " + this.username); //this here will be pointing to user object from which it is being called hence it is giving proper output
  },
};

user.rc1();
user.rc2();

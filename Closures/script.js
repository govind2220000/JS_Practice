//Closures in javascript
//Lexical Scope

//Lexical scope means a variable defined outside a function can be accessible inside another function defined after a varible declaration but the opposite is not true i.e variable defined inside a function cant be accessed outside a function

//Below is the example of lexical scope

var uname = "Hello JS"; //This is global scope
function local() {
  //This is local scope
  console.log(uname);
}
local();

//Failure Scenario when we try to declare varibale inside a function and try to access it outside it will throw err. Refer below example

// function local1() {
//   var uname1 = "Hello JS"; //This is function/local scope
//   //This is local scope
// }
// console.log(uname1);
// local1();

//Interview Ques

//global scope
function subscribe() {
  var name = "Lexical Interview Ques";
  //inner scope 2
  function display() {
    //The display function is closure here..
    //var name = "Lexical Interview Ques1";  This was for better understanding
    //inner scope
    alert(name);
    //var name = "Lexical Interview Ques1";
  }
  display();
}

subscribe(); //it will give alert as expected as display will try to find name in its function if not present it will search in parent function if present will use that variable.

//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. A closure function will have access to all variables of its parent and its parent's parent as well means global scope

//Closure example

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name, arguments);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
//makeFunc()(5); //this will call displayName with 5 as params function directly

//Closure Scope Chain

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20

//Interview Ques

let count = 0;
function printCount() {
  if (count === 0) {
    let count = 1; //shadowing happened here inside block scope
    console.log(count);
  }
  //count = 0 only
  console.log(count);
}

printCount();

// let count = 0;
// function printCount() {
//   console.log(count);
//   let count = 1;
// }

// printCount();

// Interview Question
// Write a function that would allow u to do this

var addSix = createBase(6);
addSix(10); // return 16
addSix(21); //return 27

function createBase(num) {
  function add(num1) {
    console.log(num + num1);
  }
  return add;
}

//Interview Question (Time Optimization)

function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  console.log(a[index]);
}

console.time("6");
find(6); //takes 18 ms to complete
console.timeEnd("6");
console.time("12");
find(12);
console.timeEnd("12");

function find_closure() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}
console.time("6");
//find_closure()(6); //this also takes same time as we are executing complete thing here
console.time("7");
const closure = find_closure(); //but here we are doing something like caching we are storign our a array in this variable closure and internal function have scope to this array a so it can access it without recomputing.

closure(6); //takes 0.1 ms to complete
console.timeEnd("7");
console.time("12");
closure(12); //
console.timeEnd("12");

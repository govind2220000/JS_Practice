//Var is function-scoped, meaning it’s only available within the function where it’s declared. If it’s declared outside any function, it’s globally scoped

{
  var b = 2;
  console.log(a);
}

function access(a) {
  var b1 = "i am var";
  console.log("Calling from function" + b);
}

access(b);

var a = 5;
console.log(a, b);
//console.log(b1); This will throw error as var b1 is declared inside function so it cant be access outside if it was declard outside it can be accessed from anywhere.
console.log("--------------------Var part is done--------------------");
//let and const are block scopes that means they cant be accessed from anywhere

// console.log(a1); This line will throw error(for let and const) as we are trying to access it before defining but it would have executed if it was var and output with var would be undefined.

{
  let a1 = 22;
  const a2 = 24;
  console.log(a2);
}
//console.log(a2); //This will also throw error due to scope as a1 and a2 have scope within the mentioned block only
console.log(
  "--------------------let and const part is done--------------------"
);

console.log("--------------------Shadowing--------------------");

function Shadowing() {
  let a = "Hello";

  if (true) {
    let a = "Hii";
    console.log(a);
  }
  console.log(a);
}

Shadowing();

console.log("--------------------IllegalShadowing--------------------");

function IllegalShadowing() {
  let a = "Hello";
  var b = "Hey";
  //Basically we can shadow the var with let/const but vice versa is not possible i.e. we cant shadow let/const with var it will throw error
  if (true) {
    let b = "Hii";
    //var a = "hoo" It will throw error as it is illegal shadowing as we are trying to shadow let/const with var because var is function-scoped, JavaScript interprets this as you trying to redeclare the same variable b, which is not allowed when the original variable was declared with let or const. This is why you’re getting an error. We can correct it by using let or const instead of var as let and const have block scope so a new b can exist within the if block without conflicting with the b in the outer scope 

    console.log(a, b);
  }
  console.log(a);
}

IllegalShadowing();

let c1;
var c2;
//const c3; This throws error'const' declarations must be initialized

console.log("--------------------Hoisitng--------------------");

function abc() {
  console.log("From function abc", a); //this will give undefined as we have redeclared a with var in this function below so it will give undefined as  In JavaScript, variable and function declarations are moved to the top of their containing scope during the compile phase, a process known as “hoisting”. However, only the declarations are hoisted, not initializationsso hence in the scoppe of function abc we have redeclared var a so it will be hoisted in top of the function scope but it has only been redeclared no reinitialized hence it logs undefined as var is hoisted with declaration and intiliazation as undefinded if we have not initialized it.
  //console.log(a, b, c); //for let and const we will get "Cannot access 'c'/'b' before initialization" due to Temporal Dead zone

  // The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs with let and const variables. It’s the period between entering the scope where the variable is declared (start of the block) and the line where the declaration is actually made. During this period, any reference to the variable will result in a ReferenceError.

  //TDZ is the time between the declaration and the initialization of let and const variables.

  // const c = 30;
  // let b = 10;
  var a = 5;
}
abc();

var a = 5;
function abc1() {
  console.log(a);
  function inner() {
    console.log("From inner 1", a);
    var a = 10;
  }

  return function inner2() {
    var a = 20;
    inner(); //here this will prin a as undefined as a seperate execution context is made for each fnction and in that fucntion we are having a declared wo it will refer to that a and becauise we are trying to log that a before initializing hence its showing undefined as we know variables with type as var will be by default initialized as undefined
    console.log(a);
  };
}

let fn = abc1();
fn();

// var a = 5; // Global scope

// function abc1() {
//   var a = 10; // 'a' in abc1 scope
//   console.log(a); // Logs '10', refers to 'a' in abc1 scope

//   function inner() {
//     console.log("From inner 1", a); // 'a' is not declared in this scope, so it refers to 'a' in abc1 scope
//   }

//   return function inner2() {
//     var a = 20; // 'a' in inner2 scope
//     inner(); // When called, 'inner' refers to 'a' in abc1 scope
//     console.log(a); // Logs '20', refers to 'a' in inner2 scope
//   };
// }

// let fn = abc1();
// fn();

// When the inner function is called, it doesn’t have a local variable a declared, so it looks up the scope chain. It first looks in the inner2 scope, but inner2 also has its own a variable. However, the inner function does not have access to this a because inner was not defined inside inner2, it was defined inside abc1. So it continues up the scope chain to the abc1 scope, where it finds an a variable. That’s why it logs 10, the value of a in the abc1 scope.

// This is a fundamental aspect of JavaScript known as lexical scoping: a function’s scope is determined by where it is defined, not where it is called

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
    //var a = "hoo" It will throw error as it is illegal shadowing as we are trying to shadow let/const with var

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

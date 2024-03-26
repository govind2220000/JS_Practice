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
  console.log(a); //this will give undefined as we have declared a with var.
  //console.log(a, b, c);

  // The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs with let and const variables. It’s the period between entering the scope where the variable is declared (start of the block) and the line where the declaration is actually made. During this period, any reference to the variable will result in a ReferenceError.

  //TDZ is the time between the declaration and the initialization of let and const variables.

  // const c = 30; //for let and const we will get "Cannot access 'c'/'b' before initialization" due to Temporal Dead zone
  // let b = 10;
  var a = 5;
}
abc();

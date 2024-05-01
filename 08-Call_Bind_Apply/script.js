// // Call Bind and Apply in JS

// //Q1 - What is Call?

// var obj = { name: "Govind" };

// function sayHello(num) {
//   console.log(this);
//   return "Hello " + this.name + num;
// }

// //Here sayHello Function is able to refere the parent object that is window object in browser case

// //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// //Hello
// //Op for below line

// console.log(sayHello(12));

// //but what if we want any function to refer to the context of any object we can do this as follows

// // {name: 'Govind'}
// // Hello Govind
// //Op for below line
// console.log(sayHello.call(obj, "call")); //in call we can directly pass the param to the function we can also pass multiple params here directly

// //Q2 - What is Apply?

// console.log(sayHello.apply(obj, ["apply"])); //in apply we have to pass the param to the function using an array using array is mandatory here

// //Q3 - What is Bind?

// //So basically bind doesnt execute the function directly like call and apply but instead it returns a function with the context as the object and params we have passsed

// //So basically the advantage of this is we can create a reusable function with the object context required by us which we can further reuse as when required with the different params.

// const bind = sayHello.bind(obj);
// console.log(bind);
// console.log(bind("bind"));

// //Q4 - Output Based Question

// const person = { name: "Govind" };

// function sayHi(age) {
//   return `${this.name} is ${age} years`;
// }

// console.log(sayHi.call(person, 24)); //Govind is 24 years
// console.log(sayHi.bind(person, 24)); //will return a function with input params as 24
// console.log(sayHi.bind(person, 24)()); //will return Govind is 24 years

// //Q5 - Call with function inside object

// const age = 10;

// var person1 = {
//   name: "Govind",
//   age: 20,
//   getAge: function () {
//     return this.age;
//   },
// };
// var person2 = { age: 24 };
// console.log(person1.getAge.call(person2)); //24
// console.log(person1.getAge.apply(person2)); //24
// console.log(person1.getAge.bind(person2)()); //24

// //Q6 - What is Ouptput

// var status = "😎";

// setTimeout(() => {
//   const status = "😍";

//   const data = {
//     status: "🥑",
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus()); //🥑
//   console.log(data.getStatus.call(this)); //😎  So here basically we are passing the window object which is (this ) keyword and inside window object we are having var status = '😎' hence it will refer to this status also remember this never points to a function it points to the context of the function which function refers.
// }, 0);

// // Q7 - write printAnimals() in such a way that it prints all animals in object below

// const animals = [
//   { species: "Lion", name: "King" },
//   { species: "Whale", name: "Queen" },
// ];

// function printAnimals(i) {
//   this.print = function () {
//     console.log("#" + i + " " + this.species + ": " + this.name);
//   };
//   this.print.call(animals[i]);
// }

// for (let i = 0; i < animals.length; i++) {
//   printAnimals(i);
// }

// // Q8 - How to append an array to another array.

// const array = ["a", "b"];
// const elements = [0, 1, 2];
// //array.push(elements);  (3) ['a', 'b', Array(3)] not expected output
// //array.push(...elements); //(5) ['a', 'b', 0, 1, 2] //expected output
// array.push.apply(array, elements); //here push is a function and we are applying apply to that push fucntion with the context as array object and params as elements as we know apply takes params in array format
// console.log(array);

// // Q9 - using Math.min/Math.max using apply to enhance built-in functions
// const numbers = [5, 6, 2, 3, 7];

// console.log(Math.min(2, 3, 4, 5)); //5
// //if we dont have to provide any context then we can pass null to apply
// let max = Math.max.apply(null, numbers); // equal to Math.max

// let min = Math.min.apply(null, numbers); // equal to Math.min

// console.log(max, min);

// // vs. simple loop based algorithm

// (max = -Infinity), (min = +Infinity);

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//     console.log("Max is", max);
//   }
//   if (numbers[i] < min) {
//     min = numbers[i];
//     console.log("Min is", min);
//   }
// }

// //Q10 - Create a bound function

// //The context of a bound function is hard-fixed. There’s just no way to further change it. It will return a window object.
// // In JavaScript, null is an acceptable value for this. When you bind a function to null, it means that the this inside the function will refer to the global object (in non-strict mode) or be undefined (in strict mode).

// // In a browser environment, when you bind a function to null or undefined, the this keyword inside the function refers to the global object, which is the Window object. This is because in non-strict mode, JavaScript treats null or undefined as the global object when used as this.

// //hence user.g() after binding to null also will aert window object
// function f() {
//   alert(this); // ?
// }

// let user = {
//   g: f.bind(null),
//   //g: f(),
// };

// console.log(user.g);
// user.g();

// //Q11 - Bind Chaining

// //there is no such concept as bind chaining hence f1 once binded with object cannot be again binded it can be binded if some another variable is being used here also we have used f2 in below example.

// function f1() {
//   console.log(this.name);
// }

// f = f1.bind({ name: "John" }).bind({ name: "Ann" });
// f2 = f1.bind({ name: "Hari" });
// f();
// f2();

// //Q12 - Fix the line 192 to make code work properly

// function checkPassword(success, failed) {
//   let password = prompt("Password?", "");
//   if (password == "Roadside Coder") success();
//   else failed();
// }

// let user1 = {
//   name: "Govind Choudhary",

//   loginSuccessful() {
//     console.log(`${this.name} logged in`);
//   },
//   loginFailed() {
//     console.log(`${this.name} failed to logged in`);
//   },
// };

// checkPassword(user1.loginSuccessful.bind(user1), user1.loginFailed.bind(user1));

// user1.loginSuccessful(); //Govind Choudhary logged in //This line is referring to the user1 object while using this keyword

// function abc(a) {
//   a();
// }

// //abc(user1.loginSuccessful);// logged in // This line is not referring to the user1 object while using this keyword as we are passing the function here as callback hence the context is lost to resolve this we have to bind explicitly here to the user1 object..
// abc(user1.loginSuccessful.bind(user1)); //Govind Choudhary logged in

// //Q13 - Partial application for login function

// function checkPassword1(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "Roadside Coder") ok();
//   else fail();
// }

// let user12 = {
//   name: "Govind",

//   login(result) {
//     console.log(`${this.name} ${result ? "login Successful" : "login Failed"}`);
//   },
// };

// checkPassword1(
//   user12.login.bind(user12, true),
//   user12.login.bind(user12, false)
// );

// //Q14 - Explicit inding with arrow function

// age1 = 10;

// var person13 = {
//   name: "Govind",
//   age1: 20,
//   getAgeArrow: () => console.log(this.age1),
//   getAge: function () {
//     console.log(this.age1);
//   },
// };

// var person14 = { age1: 24 };

// person13.getAge.call(person14); // 24

// //Always remember arrow functions only refer to the context of their outer normal function means their outer normal function refer to any context then the arrow function will also refer to that context only. So hence in this case it refers to window object as no outer normal function is available.
// person13.getAgeArrow.call(person14); // 10

//Q15 - Polyfill for CAll Method

var nameforpolyfill = { name: "Polyfills" };

function call1(abc) {
  console.log(this.name + abc);
}

//call1.call(nameforpolyfill); //Polyfills

//Polyfill for call
Function.prototype.MyCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "Its not callable");
  }
  context.fn = this; //so basically this here context on which we are going to apply our call method for eg {call1.call(nameforpolyfill);} here call1 is the context on which we have to apply our call so this will refer to the call1.

  context.fn(...args); //and then we are calling the function by using all the params
};

call1.MyCall(nameforpolyfill, " Govind");

//PolyFill for apply
Function.prototype.MyApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "Its not callable");
  }

  if (!Array.isArray(args)) {
    throw new Error("CreateListFromArrayLike called on non-object");
  }
  context.fn = this; //so basically this here context on which we are going to apply our call method for eg {call1.call(nameforpolyfill);} here call1 is the context on which we have to apply our call so this will refer to the call1.

  context.fn(...args); //and then we are calling the function by using all the params
};

//call1.apply(nameforpolyfill, [" Govind"]); //Polyfills Govind
call1.MyApply(nameforpolyfill, [" Govind"]); // Polyfills Govind

//PolyFill for bind

Function.prototype.MyBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be ound as its not callable");
  }

  context.fn = this; //so basically this here context on which we are going to apply our call method for eg {call1.call(nameforpolyfill);} here call1 is the context on which we have to apply our call so this will refer to the call1.

  return function (...newArgs) {
    context.fn(...args, ...newArgs); //this args and newArgs are used such that it can take params in both the scenarios like while creating a bind we can pass all the params and we can also pass the params after creating the bind.
  }; //and then we are calling the function by using all the params
};

const bindtest = call1.bind(nameforpolyfill, " Govind Bind")();
//const mybindtest = call1.bind(nameforpolyfill, " Govind MyBind")();
const mybindtest = call1.bind(nameforpolyfill);
mybindtest(" Govind MyBind");

//Inteview Ques
//const a = [1,2,3] // Output [1,2,3,1,2,3]
const arr = [1, 2, 3];

arr.push.call(arr, ...arr);
console.log(arr); //[1,2,3,1,2,3]

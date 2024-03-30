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

//Interview Question Closure(Block Scope and setTimeout)
console.log("-----------------Block Scope and setTimeout-----------------");
for (var i = 0; i < 3; i++) {
  console.log(i);
  setTimeout(() => console.log(i), 1000);
}
//output here will be 3 three time as var type has function scope and not block scope so in last iteration var i will be 3 but it wont go inside as it doesnt satisfies the condition i<3 so the final value of i = 3 and hence as we know setTimeout is async so it will run only after the complete code execution and at the time of execution it will refer the current value if i which is 3 hence it gives output as 3 three times.

//So to solve this problem we can use let instead of var as it has block scope so for each iteration current value of i will be stored for e.g for 1st iteration i will be 0 and so on and then when the complete code is executed and async setTimeout runs so then it will refer to i value which was there for that particular iteration i.e for 1st iteration i was 0 so it will refer i as 0 for that particular timeout.

for (var j = 5; j < 8; j++) {
  //console.log(j);
  function closur(j) {
    setTimeout(() => console.log(j), 1000);
  } // we can also use IIFE and pass this j   (j);

  closur(j); // so when we follow this approach so for each function call current value of j will be kept as var type has function scope and for each iteration function closure() functional scope is created and we are passing current iteration j value as an argument so in function scope memory we will have the current value of j and hence on calling closur(j) i.e closure(0) so now setTimeout async call will refer to j which was created while iterations and hence we will get desired ouput.
}

console.log(
  "---------How would you use a closure to create a private conuter---------"
);
//Interview Ques (How would you use a closure to create a private conuter)

function counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrieve() {
    console.log("Counter= " + _counter);
  }

  return {
    add,
    retrieve,
  };
}

const c = counter();
c.retrieve();
c.add(5);
c.retrieve();

//Interview Ques (What is module pattern)

var Module = (function () {
  console.log("hello Module");
  function privateMethod() {
    console.log("private");
  }
  return {
    publicMethod: function () {
      console.log("public");
    },
  };
})();

//Module.privateMethod(); //This will throw error

Module.publicMethod(); //This will run succesfully

function a1111() {
  function a() {
    var a1 = 2;
    console.log("I am a");
    return a1;
  }

  return {
    b: function () {
      console.log("I am b " + a()); // Here we are trying to restrict the access to function a directly but our function which is being returned can access the function a() as both are in same functional scope basically we are maintaing private access to function a()
    },
  };
}

a1111().b();
// a1111().a();

///Interview Ques (Make this run only once)

//Question
// let view;
// function likeTheVideo(){
//   view = "Roadside Coder"
//   console.log(view)
// }

// view()
// view()

//Soln:

let view;
let isSub = (function likeTheVideo() {
  //console.log("1");  uncomment this while revision
  let called = 0;

  return () => {
    //console.log("2");
    if (called > 0) {
      console.log("Already ran");
    } else {
      console.log("Running");
      called++;
    }
  };
})();
//iife method
isSub();
isSub();
isSub();

// const isSub = likeTheVideo();
// isSub();
// isSub();
// isSub();

//Once polyfill a more generic way to do the above thing

function once(func, context) {
  let ran;
  return function () {
    //always remember if we create an arrow fucntion here it will not work as expected as hoisting is different in case of arrow fnction
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    //console.log(ran);
    return ran;
  };
}
const hello = once((a, b) => console.log("hello", a, b));

hello(1, 2);
hello(1, 2);
hello();
hello();

console.log("-------------Memoize polyFill----------------------");
//Memoize Polyfill(Implement Caching/Memoizing Function) (Need to revise context here and in above question as well )

//Question

//As we can see it takes so long to execute as this function contains heavy computational task so to overcome this we can memoize heavy computation stuff

// const clumsysqaure = (num1, num2) => {
//   for (let i = 0; i < 10000000; i++) {}
//   return num1 * num2;
// };

// console.time("FirstCall");
// clumsysqaure(91, 92);
// console.timeEnd("FirstCall");
// console.time("SecondCall");
// clumsysqaure(91, 92);
// console.timeEnd("SecondCall");

function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    console.log(args, argsCache);
    console.log(res);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clumsysqaure = (num1, num2) => {
  for (let i = 0; i < 10000000; i++) {}
  return num1 * num2;
};

const memoize = myMemoize(clumsysqaure);

console.time("FirstCall");
memoize(91, 92);
console.timeEnd("FirstCall");
console.time("SecondCall");
memoize(91, 92);
console.timeEnd("SecondCall");

//Difference between Closure and Scope

// When we have a function within another function then inner function is a closure this closure is usually returned so that it can use the outer function variable at a later time

//Whereas a scope in javascript defines what varibale u have access to there are twp type os cope local scope and global scope and in closure we have global scope,outer scopeand local scope

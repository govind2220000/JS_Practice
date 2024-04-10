//Currying in Javascript -> Currying means no.of arguments should be equal to no.of functions
//Example f(a,b) into f(a)(b)

function f(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}

console.log(f(4)(5));

//Wroks with arrow function as well
// function f(a) {
//   return (b) =>{
//     return `${a} ${b}`;
//   };
// }

//Why to use Currying

//a. To avoid passing same variables again and again
//b. To create higher order functions
//c. To make ur functions pure and less prone to error

//Q1 -  sum(2)(6)(1)

function sum(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}

console.log(sum(5)(3)(2));

//Q2 - evaluate("sum")(4)(2)=> 6
//     evaluate("multiply")(4)(2) => 8
//     evaluate("divide")(4)(2) => 2
//     evaluate("subtract")(4)(2) => 2

function evaluate(ops) {
  return (a) => {
    return (b) => {
      if (ops === "sum") return a + b;
      else if (ops === "multiply") return a * b;
      else if (ops === "divide") return a / b;
      else if (ops === "subtract") return a - b;
      else return "Invalid operations";
    };
  };
}

//console.log(evaluate("subtract")(4)(2));

//useCase of currying

const mul = evaluate("multiply");
const add = evaluate("sum");

console.log(mul(4)(2));
console.log("----------------------");
//Q3 - Infinite Currying -> sum(1)(2)(3).....(n)
//Ex: console.log(add(5)(2)(4)(5)())

function addn(a) {
  return (b) => {
    if (b) {
      console.log(b);
      return addn(a + b);
    }
    console.log(b);
    return a;
  };
}

console.log(addn(12)(2)(4)());

//Q4 - Currying vs Partial Application

console.log("Partial Application ");

//With partial application
function partialsum(params) {
  return (b, c) => {
    return params + b + c;
  };
}

x = partialsum(2);
console.log(x(2, 3));

//or

console.log(partialsum(2)(4, 5));

console.log(" Currying Application");
function curryingSum(params) {
  return (b) => {
    return (c) => {
      return params + b + c;
    };
  };
}

console.log(curryingSum(2)(8)(20));

//Q5 - Manipulating DOM

function updateHeading(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}
const updateHeader = updateHeading("heading");
updateHeader("Hello Coder");

//Q6 - Curry Implementation

//Refer for better approach
// function a1(a, b, c, d) {
//   //console.log(...arguments)
//   return function(){
//       console.log(...arguments)
//   }

// }

// //console.log(sum1.length)
// a1(1,2,3,4)(2,4)

//Converts f(a,b,c) into f(a)(b)(c)
console.log("------CurryingImplementation------");
function curry(func) {
  console.log("Funct length:" + func.length); //func.length gives the length of params/no.of arguments passed
  return function curriedFunction(...args) {
    //(2)(4)(6)(8) are the arguments and ...args will takes arguments as one by one like first 2 and so on.
    console.log("Args length:", args.length); //here
    console.log("Args are:", args);
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        console.log("Args are:", args);
        console.log("next are:", next);
        return curriedFunction(...args, ...next);
      };
    }
  };
}

const sum1 = (a, b, c, d) => a + b + c + d;

const totalSum = curry(sum1);
//console.log(totalSum);

console.log(totalSum(2)(4)(6)(8));

function name12(...args) {
  // rest operator whenever we are passing as arguments/parameters(...)
  console.log(args);
}

a = [1, 2, 3, 4];

name12(...a); //spread operator whenever we are calling function(...)

//Refer this blog https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more

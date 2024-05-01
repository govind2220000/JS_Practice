//this keyword in JS(Implicit Binding)

var calc = {
  total: 10,
  add(a) {
    this.total += a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
};

const result = calc.add(10); // Dot notation with add is implicit binding so this keyword in this scenarios will point to the object(calc object in this case)

//Explicit binding is done using call bind and apply
console.log(result);

//this keyword depends on the context in which this is currently in
this.a = 11;
console.log(this);

function p() {
  console.log(this);
}
p();
//So in the above case we are having a function here and if we refer this inside the function so this will refer to the context in its parent scope so here the function p() is in global context which is window object in browser so this inside the function p() will be window object

//The below example is important to understand
var calc1 = {
  total: 10,
  add(a) {
    this.total += a;
    return function add1() {
      //whenever a function returns an another function so this keyword inside the another function refers to window object because this keyword context is lost
      console.log(this);
    };
  },
  /* The this keyword in JavaScript behaves differently compared to other programming languages. It always refers to the object that is currently executing the function. However, when a function is returned and then called, the context of this is lost and it defaults to the global object, which is the window object in a browser environment.

In your code, add1 is a function that is returned by the add method. When you call calc.add(10)(), the add method is executed in the context of the calc object, so this inside add refers to calc. But when add1 is called as a result of calc.add(10)(), it’s not being called as a method of an object, so this inside add1 defaults to the global object. */
  subtract(a) {
    this.total -= a;
    return this;
  },
};

const result11 = calc1.add(10)();
console.log(result11);

var obj = {
  t: 1,
  fn() {
    console.log(this.t);
    console.log(this);
  },
};

obj.fn();

//but if we have declared the function inside an object so then this keyword inside that function will refer to the object(object in which function is declared)

//what if we used an arrow function here see below example. Here the arrow function will refer this keyword to window object only remember arrow function take its this from the outer normal function
this.arrVar = 12;
const arr = () => {
  console.log(this.arrVar);
};
arr();

//Also remember unless like normal function this keyword inside the nested arrow function will also refer to outer normal function this only.
//Refer below example

var obj1 = {
  t: 1,
  fn() {
    console.log(this.t);
    console.log(this);
    return () => console.log(this);
  },
};

obj1.fn()();
// O/P for above is:
// 1
//{ t: 1, fn: [Function: fn] }
//{ t: 1, fn: [Function: fn] }

//

let user = {
  name: "Piyush",
  age: 24,
  getDetails() {
    console.log(this.name); //o/p is Piyush //here this refers to user object
  },
  childObj: {
    newName: "GOJO",
    getDetails() {
      console.log(this.newName, "and", this.name); // o/p is GOJO and undefined //here this refers to childObj
    },
  },
  getDetailsArr: () => {
    console.log(this.name, "and", this); //o/p is  and Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    //here this will refer from the outer normal function so basically it will refer its this from global context i.e. window object and window object doesnt have any name property hence empty is printed

    //So in layman terms the arrow function will take its this from its normal outer function/parent function refer this below example only where we are having a normal parentFun() which has a nested arrow function so nested arrow function will refer this from ParentFun() and ParentFun() this refers to user Object hence nested arrow function this also refers to user Object only
  },
  parentFun() {
    const nestedArrowFunc = () => {
      console.log(this.name, "and", this); // o/p Piyush and {name: 'Piyush', age: 24, childObj: {…}, getDetails: ƒ, getDetailsArr: ƒ, …}
      //so here the arrow function is taking its this from its normal outer function/parent function(i.e.ParentFun()) and ParentFun() this refers to user Object
    };
    nestedArrowFunc();
  },
};

user.getDetails();
user.getDetailsArr();
user.childObj.getDetails();
user.parentFun();

//this keyword in class

class User {
  constructor(n) {
    this.name = n;
  }

  getName() {
    console.log(this.name, "and", this); // o/p will be Govind and User {name: 'Govind'}
    //in class this keyword points to all of the variables that are inside this constructor means this will point to class User instance
  }
}

const userObj = new User("Govind");
userObj.getName();

//Output Based Question

//Q1

const user1 = {
  firstName: "Piyush!",
  getName() {
    const firstName = "Jen!";
    return this.firstName;
  },
};
console.log(user1.getName()); // What is logged?  //o/p is Piyush! as this in getName() function points to user1 object

//Q2

function makeUser() {
  return {
    name: "John",
    ref: this,
    ref1() {
      console.log(this, "and", this.name);
    },
  };
}

let user_1 = makeUser(); //Here this inside the makeUser function will be refering to window object as this keyword inside the function refers to the parent scope and parent scope is window object here hence we get o/p as below

console.log(user_1, "and", user_1.ref.name); // What's the result? // o/p {name: 'John', ref: Window} 'and' ''

//so for above example if we want to access name inside the object then we have to create a fucntion inside the object so is this can refer to object as we can see below if we direct use this inside an object it will refer to window object as its parent is global context but if we have a function inside an object and that function is using this keyword so in that case this will be referring to the object as its parent is object context
console.log("***********");
user_1.ref1(); // o/p is {name: 'John', ref: Window, ref1: ƒ} 'and' 'John'

//For better explanation for above question refer below examples

var a = {
  a1: 1,
  b1: this,
};

console.log(a.b1); // o/p is Window {window: Window, self: Window, document: document, name: '', location: Location, …}

var a1 = {
  a1: 1,
  b1() {
    console.log(this);
  },
};

console.log(a1.b1()); // o/p is { a1: 1, b1: [Function: b1] }

//Q3
console.log("-----------Q3--------------");
const user111 = {
  name: "Piyush Agarwalllllllllll!",
  logMessage() {
    console.log(this.name);
  },
}; // What is logged? } }; setTimeout(user.logMessage, 1000);
console.log(user111.logMessage()); // o/p is Piyush Agarwalllllllllll!
const n1 = user111.logMessage(); // o/p is Piyush Agarwalllllllllll! in console
console.log(n1); //this will be undefined as we are not returning anything we are just logging
console.log("-----------Before setTimeout--------------");
setTimeout(user111.logMessage, 2000); // o/p is undefined SO here it is undefined as setTimeout is using user.logMessage as a callback so it will copy the whole logMessage function inside setTimeout so reference for this will be lost and hence it will print nothing or undefined to overcome this we can use below method
setTimeout(function () {
  user111.logMessage();
}, 2000); //here it will work properly as we are invoking logMessage fnction implicitly as a user method/function

//Q4

const user_11 = {
  name: "Piyush",
  greet() {
    return `Hello, ${this.name}`; //its a normal function so this will be refered tp user_11 object
  },
  farewell: () => {
    return `Goodbye, ${this.name}`; //its an arrow function in this keyword  it will refer to its outer normal function/ parent function scope so as there are no parent functions it will refer to global context i.e. windows object so it will be Goodbye
  },
};
console.log(user_11.greet());
console.log(user_11.farewell());

//Q5

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//Q6

var length = 4;
function callback() {
  console.log(this.length); // What is logged? //4 as here this refers to window object
}
const object = {
  length: 5,
  method(fn) {
    //for this function we have this reference as object
    fn(); //o/p is 4 //when we run fn() inside this we are calling this as method independently so it will take this as global context i.e window and hence it will print empty or undefined 12but if we use arrow function here then it will take this as object. lets see
    (() => {
      console.log("Lenght is", this.length); //o/p  5
    })();
  },
  method1() {
    console.log(arguments); //see this in console
    arguments[0]();
  },
};
object.method(callback); //o/p is 4
object.method1(callback, 1, 2); // op is 3  // Explanation is: here method1 function will take n number of arguments as an array and we are executing argument[0]() so this will execute callback function as arguments is an array and callback function is inside an array so the callack function this keyword will refer to Array protoptype object and Array protoptype object already has a length property so its printing the length of arguments array which is 3

//Q7 Implement this code

//const result = calc.add(10).multiply(5).subtract(30).add(10) console.log(result.total)
//console.log(result.total)

var calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this; //we are returning this everywhere as we want complete calc object to perform further implicit binding function call
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
};

const result1 = calc.add(10).multiply(5).subtract(30).add(10);
console.log("Total is", result1.total);

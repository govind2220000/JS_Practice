//Objects in JS

//Q1 -

const user = {
  name: "Govind",
  age: 24,
  "like this video": "Something", //to add keys having space we have to write inside ""
};

console.log("Before deleting " + user.name);

delete user.name;

console.log("Before deleting " + user.name);

const func = (function (a) {
  delete a; //this will not delete the value from a ,delete keyword will only delete values from objects
  return a;
})(5);

console.log(func);

//To access the key which is having spaces
console.log(user["like this video"]);

// for adding dynamic properties to object
console.log(`---------------Dynamic Part---------------`);
const property = "firstName";
const name = "GC";

const obj1 = {
  property: name, //this will give o/p as property:GC we didnt get the property variable value which is "firstName"
  [property]: name, // this will give us the property variable value which is "firstName"
};
console.log(obj1);

//iterating through an object
console.log(`---------------Iterating Part---------------`);
for (key in obj1) {
  console.log(`${key}:${obj1[key]}`);
}

//Interview Ques1 Whats the o/p
console.log(`---------------object Inteview Q1---------------`);
const obj2 = {
  a: "one",
  b: "two",
  a: "three",
};
console.log(obj2); //will override the value of key "a"

// Objects in Javascript
// Question 2 - Create a function multiplyByTwo (obj) that multiplies all numeric property values of nums by 2.
//
console.log(`---------------object Inteview Q2---------------`);
function multiplyNumeric(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
  console.log(obj);
}

let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

multiplyNumeric(nums);

// Question 3 - Guess the o/p.
console.log(`---------------object Inteview Q3---------------`);
const a1 = {};
const b1 = { key: "b" };
const c1 = { key: "c" };

a1[b1] = 123; //So here whats happening is it tries to convert b1 in string so it becomes "[object Object]" a1["[object Object]"] = 123;
a1[c1] = 456; //same happens here also a1["[object Object]"] = 456 as key are same in both the cases it overrides the value to 456

console.log(a1);
console.log(a1[b1]); //hence otput here is 456

console.log(`---------------object Inteview Q4---------------`);
//Whats JSON.stringify() and JSON.parse?

//JSON.stringify converts JSON obj to string and JSON.parse converts JSON string to obj

const userObj = {
  name: "Govind",
  age: 24,
};

console.log(JSON.stringify(userObj)); //JSON obj to string
console.log(JSON.parse(JSON.stringify(userObj))); //JSON string to obj

//This is used to store values in our localStorage as we cant store object there directly
localStorage.setItem("test", JSON.stringify(userObj));

console.log(`---------------object Inteview Q5---------------`);
//Whats the output

console.log([..."Lydia"]); //array with values ['L', 'y', 'd', 'i', 'a'] here it will work as spread operator
console.log(`---------------object Inteview Q6---------------`);

//Whats the output
const userDetails = { name: "Lydia", age: 21 };
const admin = { admin: true, ...userDetails }; //...userDetails will destrucutre each property and will add these properties in admin oobject
console.log(admin); //{admin: true, name: 'Lydia', age: 21}

console.log(`---------------object Inteview Q7---------------`);
//Whats the output

const setting = {
  username: "Govind",
  level: 10,
  health: 90,
};

const data = JSON.stringify(setting, ["level", "health"]); //this will just stringify the object with properties as level and health
console.log(data); // O/p will be {"level":10,"health":90}

console.log(`---------------object Inteview Q8---------------`);
//Whats the output

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 10; //This function is declared with keyword function so it have access to its object instance variables i.e radius
  },
  perimeter: () => 2 * Math.PI * this.radius, //This function is declared without keyword function so it doesnt have access to its object instance variables i.e radius hence this.radius is undefined and op will be NaN becoz the arrow function refers this as global window object and there its not able to find any radius property hence undefined.
};

console.log(shape.diameter()); //output is 100
console.log(shape.perimeter()); //Nan

console.log(`---------------object Inteview Q9---------------`);

let obj3 = {
  nameFromObj3: "Gojo",
  age: 32,
  fullName: {
    firstName1: "Satoru",
    lastName: "Gojo",
  },
};

//const { nameFromObj3 } = obj3;
//console.log(nameFromObj3);

//So suppose we have already used a variable with name as nameFromObj3 so it will throw error so to overcome this we can rename it while destructuring
const nameFromObj3 = "test";
const { nameFromObj3: name12 } = obj3;
console.log(nameFromObj3, name12);

//for doing destructuring on nested objects
const {
  fullName: { firstName1 },
} = obj3;
console.log(firstName1);

console.log(`---------------object Inteview Q10---------------`);
//Guess the o/p

//function getItems(fruitList,...args,favouriteFrui){} //this will throw error as rest parameter should always be at end

function getItems(fruitList, favouriteFruit, ...args) {
  console.log(...args);
  return [...fruitList, ...args, favouriteFruit]; //this will not throw error as spread parameter doesnt follow rules like rest it can be anywhere
}

getItems(["orange", "banana"], "mango", "grapes"); //grapes here will be sent in an array due rest operator parameter defined in getItems
console.log(getItems(["orange", "banana"], "mango", "grapes"));

console.log(`---------------object Inteview Q11---------------`);
//Object referencing
//Guess the output

let c = {
  gretting: "Hello",
};

let d;

d = c;
c.gretting = "Hello Sir";
console.log(d.gretting); //this will also print Hello Sir only as both c and d variable are pointing to same memnory location

console.log(`---------------object Inteview Q12---------------`);
//Guess the output (Object Referencing)
console.log({ a: 1 } == { a: 1 }); // here also o/p will be false as both the objects are in different memory location if we have used with variable same as in above example then it would have been same as both of them will be pointing to same memory location
console.log({ a: 1 } === { a: 1 }); //This condition will always return false since JavaScript compares objects by reference, not value.

console.log(`---------------object Inteview Q13---------------`);
//Guess the output (Object Referencing)

let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members); //here it will print the person object only not null becoz we are making person variable pointing to null but actual memory location of that object  { name: "Lydia" } still exists hence members is still referring there

//But if we do something like
let person1 = { name: "Lydia" };
const members1 = [person];
person1.name = null;

console.log(members1); //Then this will give an array of null as we are making the change in memory location and not just making the variable refere somewhere else hence. Just refer below example for more clarity

//Examle
let a = [1, 2, 3, 4];

let b = a;

console.log(`Before making a null: a is ${a} and b is ${b}`);

a = null;

console.log(`After making a null: a is ${a} and b is ${b}`);

console.log(`---------------object Inteview Q14---------------`);
//guess the o/p

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply(); //here we are not sending any value so by defalt it will take x = { ...value } and x here will have cloned data of the variable value that means both of them will not refer to same meory location so the o/p will be 20
multiply(); //o/p will be 20
multiply(value); // But here we are passing the variable value as an argument hence x will  be referring to same memory location as value so the o/p here will be 20 as well but this time as x and value variable are ponting to same memory location so if x updated the property number at that memory location so value varibale will also refer that only
multiply(value); //so in previous value was 20 so now it will be 40 sor both value as well as x variable

//Refer below example for better understanding

let person11 = { name: "Lydia", age: 24 };

let person22 = { ...person11 }; //this will clone the data hence both will person1 and person2 will be pointing to different memory locations

console.log(person11 == person22);
console.log(person22 === person22);

console.log(`---------------object Inteview Q14---------------`);

function changeAgeAndReference(person) {
  //here the argument person has access to memory location of variable perosn21
  person.age = 25; //here it will change the property value as (person21) is argument here and it will change the value at memory level
  person = {
    //here we are reassigning the value of person the person21 main object is still present so person21 will still have access to that memory but in above line we have update age property in memory location keep this is mind and hence person21 will have access to its location and person argument in case of this function will be pointing to a a new memory location
    name: "John",
    age: 50,
  };
  return person;
}

const person21 = {
  name: "Alex",
  age: 30,
};

const personObj2 = changeAgeAndReference(person21);

console.log(person21); //so this will return the object with age as 25 becoz we have updated this in changeAgeAndReference function call
console.log(personObj2); // and this will return the reassigned vcalue inside changeAgeAndReference function call

console.log(`---------------object Inteview Q15---------------`);
//What is Shallow Copy and Deep Copy

// In JavaScript, the concepts of shallow copy and deep copy are related to how objects are copied.

// Shallow Copy A shallow copy creates a new object and copies over the values of the original object. However, if the original object contains other objects (or arrays), the references to those objects are copied, not the actual objects themselves. This means that if you modify a nested object in the copied object, it will also modify the original object. Here’s an example:

let employee = {
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000,
};
console.log("Employee=> ", employee);
let newEmployee = employee;
console.log("New Employee=> ", newEmployee);
console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);

// In the above example, when the ename of newEmployee is modified, it is also reflected for the old employee object1.

// Deep Copy A deep copy, on the other hand, creates a new object and recursively adds copies of the properties of the original object. If the original object contains other objects, those objects are also deeply copied. Therefore, changes to the copied object do not affect the original object. Here’s an example:

let employee1 = {
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000,
};
console.log("=========Deep Copy========");
let newEmployee1 = JSON.parse(JSON.stringify(employee1));
console.log("Employee=> ", employee1);
console.log("New Employee=> ", newEmployee1);
console.log("---------After modification---------");
newEmployee1.ename = "Beck";
newEmployee1.salary = 70000;
console.log("Employee=> ", employee1);
console.log("New Employee=> ", newEmployee1);

console.log(`---------------object Inteview Q16---------------`);
//How to deep copy or clone a object

let obj111 = {
  name: "Goku",
  age: 45,
};

//methods for deep copy
//method1
const objClone = Object.assign({}, obj111); //this will not clone nested objects
//method2
const objClone1 = JSON.parse(JSON.stringify(obj111));
//method3
const objClone11 = { ...obj111 };
console.log("Unmodified", objClone);
objClone.name = "Gojo";
console.log("modified", objClone);
console.log("Og", obj111);
//above example fails for nested object refer below example

// let obj1112 = {
//   name: "Goku",
//   age: 45,
//   fullName:{
//       fname:"Saiyan",
//       lname:"Goku"
//   }
// };

// const objClone1 = Object.assign({}, obj1112); //this will not clone nested objects
// console.log("Unmodified", objClone1);
// objClone1.name = "Gojo";
// objClone1.fullName.fname = "Satoru";
// console.log("modified", objClone1);
// console.log("Og", obj1112);

//Op for above
// Unmodified { name: 'Goku', age: 45, fullName: { fname: 'Saiyan', lname: 'Goku' } }
// modified { name: 'Gojo', age: 45, fullName: { fname: 'Satoru', lname: 'Goku' } }
// Og { name: 'Goku', age: 45, fullName: { fname: 'Satoru', lname: 'Goku' } }

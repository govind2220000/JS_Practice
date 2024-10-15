//Question 3: Can you write a function in JavaScript to merge two objects without overwriting existing properties?

let obj1 = { name: "Hello", age: 25 };
let obj2 = { name1: "Hello", age1: 25 };

//In JavaScript, if you want to return an object literal using an arrow function, you must wrap the literal in parentheses (). This is because the {} braces are interpreted as the start and end of a function block, not an object literal.
const mergedObj = (obj1, obj2) => ({ ...obj1, ...obj2 });

console.log(mergedObj(obj1, obj2));

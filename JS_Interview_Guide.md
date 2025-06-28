# JavaScript Interview Preparation Guide

## 📋 Table of Contents

### 👨‍💻 Basic Level JS Interview Questions and Answers
- [1. What is JavaScript and its common uses?](#1-what-is-javascript-and-its-common-uses)
- [2. What are template literals in JavaScript?](#2-what-are-template-literals-in-javascript)
- [3. What is hoisting? Provide an example.](#3-what-is-hoisting-provide-an-example)
- [4. Difference between let, var, and const.](#4-difference-between-let-var-and-const)
- [5. Data types in JavaScript.](#5-data-types-in-javascript)
- [6. What is an array, and how to access its elements?](#6-what-is-an-array-and-how-to-access-its-elements)
- [7. Difference between == and ===.](#7-difference-between--and-)
- [8. Purpose of the isNaN function.](#8-purpose-of-the-isnan-function)
- [9. What is null vs undefined?](#9-what-is-null-vs-undefined)
- [10. Use of the typeof operator.](#10-use-of-the-typeof-operator)

### 👨‍💻 Intermediate Level JavaScript Interview Questions
- [11. Purpose of the map method in JavaScript.](#11-purpose-of-the-map-method-in-javascript)
- [12. Explain event bubbling and event capturing.](#12-explain-event-bubbling-and-event-capturing)
- [13. What are higher-order functions? Provide an example.](#13-what-are-higher-order-functions-provide-an-example)
- [14. What is an IIFE (Immediately Invoked Function Expression)?](#14-what-is-an-iife-immediately-invoked-function-expression)
- [15. Explain closures in JavaScript.](#15-explain-closures-in-javascript)
- [16. How do setTimeout and setInterval work?](#16-how-do-settimeout-and-setinterval-work)
- [17. Describe promises in JavaScript.](#17-describe-promises-in-javascript)
- [18. Use of async and await in JavaScript.](#18-use-of-async-and-await-in-javascript)
- [19. Difference between call, apply, and bind.](#19-difference-between-call-apply-and-bind)
- [20. What is event delegation?](#20-what-is-event-delegation)

### 👨‍💻 JavaScript Interview Questions and Answers for Experienced
- [21. Explain the event loop in JavaScript.](#21-explain-the-event-loop-in-javascript)
- [22. Difference between promises and async/await.](#22-difference-between-promises-and-asyncawait)
- [23. Purpose of the reduce method in arrays.](#23-purpose-of-the-reduce-method-in-arrays)
- [24. Explain currying in JavaScript.](#24-explain-currying-in-javascript)
- [25. What is a generator function and its usage?](#25-what-is-a-generator-function-and-its-usage)
- [26. What are weak maps and weak sets in JavaScript?](#26-what-are-weak-maps-and-weak-sets-in-javascript)
- [27. How does JavaScript handle memory management?](#27-how-does-javascript-handle-memory-management)
- [28. Difference between shallow and deep copying.](#28-difference-between-shallow-and-deep-copying)
- [29. What is strict mode in JavaScript and how is it enabled?](#29-what-is-strict-mode-in-javascript-and-how-is-it-enabled)
- [30. Observer pattern and its relation to JavaScript.](#30-observer-pattern-and-its-relation-to-javascript)

---

## 👨‍💻 Basic Level JS Interview Questions and Answers

### 1. What is JavaScript and its common uses?
**Answer:**
JavaScript is a versatile, high-level programming language primarily used for adding interactivity and dynamic behavior to web pages. It runs in the browser and can also be used on the server (Node.js).

**Common Uses:**
- Making web pages interactive (e.g., dropdowns, sliders)
- Validating form data
- Creating web and mobile applications
- Server-side development (Node.js)
- Game development

**Example:**
```js
// Display a message when a button is clicked
function showMessage() {
  alert('Hello, JavaScript!');
}
```

**Interview Q&A:**
- **Q:** Is JavaScript only used in browsers?
  **A:** No, it can also be used on servers (Node.js), mobile apps, and more.

---

### 2. What are template literals in JavaScript?
**Answer:**
Template literals are string literals allowing embedded expressions. They use backticks (\`) instead of single ('') or double quotes ("").

**Features:**
- Multi-line strings
- String interpolation with `${}`

**Example:**
```js
const name = 'Alice';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Alice!

// Multi-line
const multiLine = `This is line 1
This is line 2`;
```

**Interview Q&A:**
- **Q:** How do you include variables in a template literal?
  **A:** Use `${variable}` inside backticks.

---

### 3. What is hoisting? Provide an example.
**Answer:**
Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (script or function) before code execution.

- Only declarations are hoisted, not initializations.

**Example:**
```js
console.log(a); // undefined
var a = 5;
```
This works because `var a` is hoisted, but not its value.

**Interview Q&A:**
- **Q:** Are `let` and `const` hoisted?
  **A:** Yes, but they are not initialized, so accessing them before declaration throws an error (Temporal Dead Zone).

---

### 4. Difference between let, var, and const.
**Answer:**
- `var`: Function-scoped, can be redeclared and updated, hoisted (initialized as undefined).
- `let`: Block-scoped, cannot be redeclared in the same scope, can be updated, hoisted (not initialized).
- `const`: Block-scoped, cannot be redeclared or updated, must be initialized at declaration, hoisted (not initialized).

**Example:**
```js
var x = 1;
let y = 2;
const z = 3;

x = 10; // OK
// let y = 20; // Error: redeclaration
// z = 30; // Error: assignment to constant
```

**Interview Q&A:**
- **Q:** Can you change the value of a `const` object?
  **A:** You cannot reassign the object, but you can change its properties.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** How does variable shadowing work with `var`, `let`, and `const`?
  **A:** `let` and `const` are block-scoped, so they can shadow variables from outer scopes. `var` is function-scoped, so shadowing only occurs within functions.
  ```js
  let x = 1;
  {
    let x = 2; // Shadows outer x
    console.log(x); // 2
  }
  console.log(x); // 1
  ```
- **Q:** What are the implications of using `var` in asynchronous code (e.g., loops with setTimeout)?
  **A:** `var` is function-scoped, so all callbacks share the same variable, leading to unexpected results. `let` creates a new binding per iteration.
  ```js
  // Problem with var
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // Prints 3, 3, 3
  }
  
  // Solution with let
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // Prints 0, 1, 2
  }
  ```
- **Q:** Can you explain why `const` does not make objects immutable?
  **A:** `const` prevents reassignment, but object properties can still be changed. Use `Object.freeze()` for immutability.
  ```js
  const obj = { name: 'Alice' };
  obj.name = 'Bob'; // OK
  // obj = {}; // Error: reassignment
  
  const frozen = Object.freeze({ name: 'Alice' });
  frozen.name = 'Bob'; // No effect in strict mode
  ```

---

### 5. Data types in JavaScript.
**Answer:**
JavaScript has 8 basic data types:
- String
- Number
- BigInt
- Boolean
- Undefined
- Null
- Symbol
- Object (including arrays, functions)

**Example:**
```js
let str = 'Hello'; // String
let num = 42; // Number
let big = 123n; // BigInt
let bool = true; // Boolean
let und; // Undefined
let nul = null; // Null
let sym = Symbol('id'); // Symbol
let obj = { name: 'Alice' }; // Object
```

**Interview Q&A:**
- **Q:** What is the type of `null`?
  **A:** `typeof null` returns 'object' (this is a historical bug in JavaScript).

**Extra Interview Questions (5+ YOE Level):**
- **Q:** How do you check if a value is an array, and why is `typeof` not sufficient?
  **A:** Use `Array.isArray(value)` because `typeof []` returns 'object'.
  ```js
  const arr = [1, 2, 3];
  console.log(typeof arr); // 'object'
  console.log(Array.isArray(arr)); // true
  console.log(arr instanceof Array); // true (alternative)
  ```
- **Q:** What is the difference between primitive and reference types?
  **A:** Primitives are copied by value, references by reference. Changes to reference types affect all references.
  ```js
  // Primitive
  let a = 5;
  let b = a;
  b = 10;
  console.log(a); // 5 (unchanged)
  
  // Reference
  let obj1 = { name: 'Alice' };
  let obj2 = obj1;
  obj2.name = 'Bob';
  console.log(obj1.name); // 'Bob' (changed)
  ```
- **Q:** How does JavaScript handle type coercion in operations like `+` and `==`?
  **A:** JavaScript converts types automatically, which can lead to unexpected results (e.g., `'5' + 1` is `'51'`).
  ```js
  console.log('5' + 1); // '51' (string concatenation)
  console.log('5' - 1); // 4 (number subtraction)
  console.log('5' == 5); // true (loose equality)
  console.log('5' === 5); // false (strict equality)
  ```

---

### 6. What is an array, and how to access its elements?
**Answer:**
An array is a special variable that can hold multiple values in a single variable, stored in a list-like structure.

**Accessing Elements:**
Use the index (starting from 0) to access elements.

**Example:**
```js
let arr = [10, 20, 30];
console.log(arr[0]); // 10
console.log(arr[2]); // 30
```

**Interview Q&A:**
- **Q:** How do you find the length of an array?
  **A:** Use `arr.length`.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** How does array destructuring work, and what are its benefits?
  **A:** Destructuring allows unpacking values from arrays into variables, making code concise and readable.
  ```js
  const [a, b, ...rest] = [1, 2, 3, 4, 5];
  console.log(a); // 1
  console.log(b); // 2
  console.log(rest); // [3, 4, 5]
  
  // Swapping variables
  let x = 1, y = 2;
  [x, y] = [y, x];
  console.log(x, y); // 2, 1
  ```
- **Q:** What happens if you access an array index that does not exist?
  **A:** It returns `undefined`.
  ```js
  const arr = [1, 2, 3];
  console.log(arr[5]); // undefined
  console.log(arr[-1]); // undefined
  ```
- **Q:** How do sparse arrays behave in JavaScript?
  **A:** Sparse arrays have missing indices; methods like `forEach` skip them, but `length` still counts the highest index plus one.
  ```js
  const sparse = [1, , 3, , 5];
  console.log(sparse.length); // 5
  sparse.forEach((item, index) => {
    console.log(`Index ${index}: ${item}`);
  }); // Only logs indices 0, 2, 4
  ```

---

### 7. Difference between == and ===.
**Answer:**
- `==` checks for value equality after type coercion.
- `===` checks for both value and type equality (strict equality).

**Example:**
```js
console.log(5 == '5'); // true
console.log(5 === '5'); // false
```

**Interview Q&A:**
- **Q:** Which is recommended to use?
  **A:** `===` is recommended to avoid unexpected type conversions.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** Can you provide examples where `==` and `===` behave differently with objects?
  **A:** Both compare object references, so `{} == {}` and `{} === {}` are both false.
  ```js
  const obj1 = { name: 'Alice' };
  const obj2 = { name: 'Alice' };
  console.log(obj1 == obj2); // false
  console.log(obj1 === obj2); // false
  console.log(obj1 == obj1); // true (same reference)
  ```
- **Q:** How does JavaScript perform type coercion with `==`?
  **A:** It converts operands to a common type before comparison, which can lead to confusing results (e.g., `'' == 0` is true).
  ```js
  console.log('' == 0); // true (empty string converts to 0)
  console.log('0' == 0); // true (string converts to number)
  console.log(false == 0); // true (boolean converts to number)
  console.log(null == undefined); // true (special case)
  ```
- **Q:** When might you intentionally use `==` over `===`?
  **A:** Rarely, but sometimes for loose checks (e.g., `value == null` to match both `null` and `undefined`).
  ```js
  function checkValue(value) {
    if (value == null) {
      console.log('Value is null or undefined');
    }
  }
  checkValue(null); // "Value is null or undefined"
  checkValue(undefined); // "Value is null or undefined"
  ```

---

### 8. Purpose of the isNaN function.
**Answer:**
`isNaN()` checks whether a value is NaN (Not-a-Number).

**Example:**
```js
console.log(isNaN('hello')); // true
console.log(isNaN(123)); // false
console.log(isNaN(NaN)); // true
```

**Interview Q&A:**
- **Q:** What does `isNaN('123')` return?
  **A:** false, because '123' can be converted to a number.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** What is the difference between `isNaN()` and `Number.isNaN()`?
  **A:** `isNaN()` coerces its argument to a number first, while `Number.isNaN()` only returns true if the argument is exactly NaN.
  ```js
  console.log(isNaN('hello')); // true (coerces to NaN)
  console.log(Number.isNaN('hello')); // false (not NaN)
  console.log(isNaN('')); // false (coerces to 0)
  console.log(Number.isNaN('')); // false (not NaN)
  ```
- **Q:** Why might `isNaN()` give unexpected results with certain inputs?
  **A:** Because it coerces values, `isNaN('')` returns false (empty string converts to 0), but `isNaN('abc')` returns true.
  ```js
  console.log(isNaN('')); // false (empty string → 0)
  console.log(isNaN('123')); // false (string number → 123)
  console.log(isNaN('abc')); // true (non-numeric string → NaN)
  console.log(isNaN(null)); // false (null → 0)
  ```
- **Q:** How would you check if a value is a valid number without using `isNaN()`?
  **A:** Use `typeof value === 'number' && !isNaN(value)` or `Number.isFinite(value)`.
  ```js
  function isValidNumber(value) {
    return typeof value === 'number' && !isNaN(value) && isFinite(value);
  }
  
  console.log(isValidNumber(42)); // true
  console.log(isValidNumber('42')); // false
  console.log(isValidNumber(NaN)); // false
  console.log(isValidNumber(Infinity)); // false
  ```

---

### 9. What is null vs undefined?
**Answer:**
- `null` is an assignment value that represents no value.
- `undefined` means a variable has been declared but not assigned a value.

**Example:**
```js
let a;
console.log(a); // undefined
let b = null;
console.log(b); // null
```

**Interview Q&A:**
- **Q:** What is the type of `undefined`?
  **A:** 'undefined'.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** How do you distinguish between `null` and `undefined` in practice?
  **A:** Use strict equality (`===`) or check their types. `null` is an intentional absence of value, while `undefined` is unassigned.
  ```js
  function checkValue(value) {
    if (value === null) {
      console.log('Value is null');
    } else if (value === undefined) {
      console.log('Value is undefined');
    } else {
      console.log('Value is:', value);
    }
  }
  
  checkValue(null); // "Value is null"
  checkValue(undefined); // "Value is undefined"
  ```
- **Q:** What happens when you try to access properties of `null` or `undefined`?
  **A:** Both throw a TypeError when accessing properties, but `undefined` is more common in practice.
  ```js
  let obj = null;
  // console.log(obj.property); // TypeError: Cannot read property 'property' of null
  
  let undef;
  // console.log(undef.property); // TypeError: Cannot read property 'property' of undefined
  ```
- **Q:** How do modern JavaScript features like optional chaining handle `null` and `undefined`?
  **A:** Optional chaining (`?.`) safely accesses nested properties, returning `undefined` if any intermediate value is `null` or `undefined`.
  ```js
  const user = null;
  console.log(user?.name); // undefined (no error)
  
  const config = { api: { url: 'https://api.example.com' } };
  console.log(config?.api?.url); // 'https://api.example.com'
  console.log(config?.missing?.property); // undefined
  ```

---

### 10. Use of the typeof operator.
**Answer:**
`typeof` is used to find the data type of a variable.

**Example:**
```js
console.log(typeof 123); // 'number'
console.log(typeof 'abc'); // 'string'
console.log(typeof undefined); // 'undefined'
console.log(typeof null); // 'object' (historical bug)
```

**Interview Q&A:**
- **Q:** What does `typeof []` return?
  **A:** 'object'.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** What are the limitations of `typeof` when checking for specific object types?
  **A:** `typeof` cannot distinguish between different object types (arrays, dates, etc.) - all return 'object'.
  ```js
  console.log(typeof []); // 'object'
  console.log(typeof {}); // 'object'
  console.log(typeof new Date()); // 'object'
  console.log(typeof null); // 'object' (historical bug)
  
  // Better alternatives
  console.log(Array.isArray([])); // true
  console.log([] instanceof Array); // true
  ```
- **Q:** How do you check if a value is a function using `typeof`?
  **A:** `typeof value === 'function'` works for functions, but not for arrow functions in some edge cases.
  ```js
  function regularFunction() {}
  const arrowFunction = () => {};
  const asyncFunction = async () => {};
  
  console.log(typeof regularFunction); // 'function'
  console.log(typeof arrowFunction); // 'function'
  console.log(typeof asyncFunction); // 'function'
  ```
- **Q:** What does `typeof null` return and why is this considered a bug?
  **A:** It returns 'object' due to a historical bug in JavaScript's type checking implementation.
  ```js
  console.log(typeof null); // 'object' (bug)
  console.log(null === null); // true (correct way to check for null)
  
  // Safe null check
  function isNull(value) {
    return value === null;
  }
  ```

---

## 👨‍💻 Intermediate Level JavaScript Interview Questions

### 11. Purpose of the map method in JavaScript.
**Answer:**
The `map()` method creates a new array by applying a function to each element of the original array.

**Example:**
```js
const nums = [1, 2, 3];
const squares = nums.map(x => x * x);
console.log(squares); // [1, 4, 9]
```

**Interview Q&A:**
- **Q:** Does `map()` modify the original array?
  **A:** No, it returns a new array.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** How does `map()` handle sparse arrays and what are the implications?
  **A:** `map()` skips empty slots in sparse arrays, which can lead to unexpected results if not handled properly.
  ```js
  const sparse = [1, , 3, , 5];
  const mapped = sparse.map(x => x * 2);
  console.log(mapped); // [2, empty, 6, empty, 10]
  console.log(mapped.length); // 5
  
  // Handling sparse arrays
  const dense = sparse.filter(x => x !== undefined);
  const safeMapped = dense.map(x => x * 2);
  console.log(safeMapped); // [2, 6, 10]
  ```
- **Q:** What is the difference between `map()` and `forEach()` in terms of return value and chaining?
  **A:** `map()` returns a new array and can be chained, while `forEach()` returns `undefined` and cannot be chained.
  ```js
  const numbers = [1, 2, 3];
  
  // map() - returns new array, can chain
  const doubled = numbers.map(x => x * 2);
  console.log(doubled); // [2, 4, 6]
  
  const result = numbers
    .map(x => x * 2)
    .filter(x => x > 4)
    .reduce((sum, x) => sum + x, 0);
  console.log(result); // 10
  
  // forEach() - returns undefined, cannot chain
  let sum = 0;
  numbers.forEach(x => sum += x);
  console.log(sum); // 6
  ```
- **Q:** How would you implement a custom `map()` function from scratch?
  **A:** Use a loop to iterate over the array, apply the callback function to each element, and return a new array with the results.
  ```js
  function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  }
  
  const numbers = [1, 2, 3];
  const doubled = customMap(numbers, x => x * 2);
  console.log(doubled); // [2, 4, 6]
  ```

---

### 12. Explain event bubbling and event capturing.
**Answer:**
- **Event Bubbling:** The event starts from the target element and bubbles up to the root (document).
- **Event Capturing:** The event starts from the root and goes down to the target element.

**Example:**
```js
// HTML: <div id="parent"><button id="child">Click me</button></div>
document.getElementById('parent').addEventListener('click', () => console.log('Parent'), false); // bubbling
document.getElementById('child').addEventListener('click', () => console.log('Child'), false);
```

**Interview Q&A:**
- **Q:** Which is the default mode?
  **A:** Event bubbling.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** How do you stop event propagation and what are the differences between `stopPropagation()` and `stopImmediatePropagation()`?
  **A:** `stopPropagation()` prevents the event from bubbling up, while `stopImmediatePropagation()` also prevents other handlers on the same element from executing.
  ```js
  // HTML: <div id="parent"><button id="child">Click me</button></div>
  
  document.getElementById('child').addEventListener('click', (e) => {
    console.log('Child clicked');
    e.stopPropagation(); // Prevents bubbling to parent
  });
  
  document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent clicked'); // Won't execute due to stopPropagation
  });
  
  // stopImmediatePropagation example
  document.getElementById('child').addEventListener('click', (e) => {
    console.log('Handler 1');
    e.stopImmediatePropagation(); // Stops other handlers on same element
  });
  
  document.getElementById('child').addEventListener('click', () => {
    console.log('Handler 2'); // Won't execute
  });
  ```
- **Q:** What is event delegation and how does it relate to bubbling?
  **A:** Event delegation uses bubbling to handle events on parent elements for child elements, improving performance and simplifying code.
  ```js
  // Instead of adding listeners to each list item
  document.getElementById('list').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      console.log('List item clicked:', e.target.textContent);
      e.target.classList.toggle('selected');
    }
  });
  
  // Dynamically added items work automatically
  const newItem = document.createElement('li');
  newItem.textContent = 'New Item';
  document.getElementById('list').appendChild(newItem);
  ```
- **Q:** How do you handle events in React or other frameworks that might not follow the same bubbling rules?
  **A:** React uses synthetic events that normalize browser differences, and event handling might be different from native DOM events.
  ```jsx
  // React event handling
  function ParentComponent() {
    const handleParentClick = () => console.log('Parent clicked');
    const handleChildClick = (e) => {
      console.log('Child clicked');
      e.stopPropagation(); // React synthetic event
    };
    
    return (
      <div onClick={handleParentClick}>
        <button onClick={handleChildClick}>Click me</button>
      </div>
    );
  }
  ```

---

### 13. What are higher-order functions? Provide an example.
**Answer:**
A higher-order function is a function that takes another function as an argument or returns a function.

**Example:**
```js
function greet(fn) {
  fn();
}
greet(() => console.log('Hello!'));

const add = x => y => x + y;
console.log(add(2)(3)); // 5
```

**Interview Q&A:**
- **Q:** Name some built-in higher-order functions in JS.
  **A:** `map`, `filter`, `reduce`.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** How do you implement function composition using higher-order functions?
  **A:** Function composition combines multiple functions into one: `const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)`.
  ```js
  const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
  
  const addOne = x => x + 1;
  const double = x => x * 2;
  const square = x => x * x;
  
  const composed = compose(square, double, addOne);
  console.log(composed(3)); // ((3 + 1) * 2)² = 64
  
  // Alternative with pipe (left to right)
  const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);
  const piped = pipe(addOne, double, square);
  console.log(piped(3)); // ((3 + 1) * 2)² = 64
  ```
- **Q:** What are the performance implications of using higher-order functions in loops?
  **A:** Creating functions in loops can lead to memory leaks and performance issues. Consider moving function creation outside loops.
  ```js
  // Bad: Creating function in loop
  for (let i = 0; i < 1000; i++) {
    const handler = () => console.log(i); // New function each iteration
    element.addEventListener('click', handler);
  }
  
  // Good: Function created once
  const createHandler = (index) => () => console.log(index);
  for (let i = 0; i < 1000; i++) {
    element.addEventListener('click', createHandler(i));
  }
  ```
- **Q:** How do you handle error boundaries in higher-order functions?
  **A:** Use try-catch blocks or return functions that handle errors gracefully, especially when dealing with async operations.
  ```js
  const withErrorHandling = (fn) => {
    return (...args) => {
      try {
        return fn(...args);
      } catch (error) {
        console.error('Function error:', error);
        return null; // or default value
      }
    };
  };
  
  const riskyFunction = (x) => {
    if (x < 0) throw new Error('Negative number');
    return x * 2;
  };
  
  const safeFunction = withErrorHandling(riskyFunction);
  console.log(safeFunction(5)); // 10
  console.log(safeFunction(-5)); // null (error handled)
  ```

---

### 14. What is an IIFE (Immediately Invoked Function Expression)?
**Answer:**
An IIFE is a function that runs as soon as it is defined.

**Example:**
```js
(function() {
  console.log('IIFE runs!');
})();
```

**Interview Q&A:**
- **Q:** Why use IIFE?
  **A:** To create a private scope and avoid polluting the global namespace.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** How do you pass parameters to an IIFE and what are the use cases?
  **A:** Pass parameters after the closing parenthesis: `(function(param) { })(value)`. Useful for dependency injection and module patterns.
  ```js
  // Dependency injection
  (function($, window) {
    const app = {
      init: function() {
        $('.button').on('click', this.handleClick);
      },
      handleClick: function() {
        console.log('Button clicked');
      }
    };
    window.app = app;
  })(jQuery, window);
  
  // Module pattern with parameters
  const calculator = (function(initialValue) {
    let result = initialValue;
    
    return {
      add: (x) => result += x,
      subtract: (x) => result -= x,
      getResult: () => result
    };
  })(10);
  
  console.log(calculator.getResult()); // 10
  calculator.add(5);
  console.log(calculator.getResult()); // 15
  ```
- **Q:** What are the differences between IIFE and block scope with `let`/`const`?
  **A:** Block scope is simpler and more readable, but IIFE can be used in older browsers and provide more control over execution context.
  ```js
  // IIFE approach (older browsers)
  (function() {
    var privateVar = 'private';
    function privateFunction() {
      console.log(privateVar);
    }
    // privateVar and privateFunction are not accessible outside
  })();
  
  // Block scope approach (modern browsers)
  {
    const privateVar = 'private';
    const privateFunction = () => console.log(privateVar);
    // privateVar and privateFunction are not accessible outside
  }
  ```
- **Q:** How do you handle async operations within an IIFE?
  **A:** Use async IIFE: `(async function() { await someAsyncOperation(); })()` or use `.then()` for promise handling.
  ```js
  // Async IIFE
  (async function() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  })();
  
  // Promise-based IIFE
  (function() {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  })();
  ```

---

### 15. Explain closures in JavaScript.
**Answer:**
A closure is a function that remembers its outer variables and can access them even after the outer function has finished executing.

**Example:**
```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  }
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

**Interview Q&A:**
- **Q:** What are closures commonly used for?
  **A:** Data privacy and function factories.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** How do closures affect memory management and what are potential memory leaks?
  **A:** Closures keep references to outer variables, preventing garbage collection. This can cause memory leaks if not managed properly.
  ```js
  // Potential memory leak
  function createLeak() {
    const largeData = new Array(1000000).fill('data');
    
    return function() {
      console.log(largeData.length); // Keeps reference to largeData
    };
  }
  
  const leakyFunction = createLeak();
  // largeData cannot be garbage collected even after createLeak finishes
  
  // Solution: Clear references when done
  function createSafe() {
    const largeData = new Array(1000000).fill('data');
    
    return function() {
      console.log(largeData.length);
      // Clear reference when done
      largeData.length = 0;
    };
  }
  ```
- **Q:** How do you create a closure that maintains state across multiple function calls?
  **A:** Return a function from another function that captures variables from the outer scope, creating a persistent state.
  ```js
  function createCounter(initialValue = 0) {
    let count = initialValue;
    
    return {
      increment: () => ++count,
      decrement: () => --count,
      getValue: () => count,
      reset: () => count = initialValue
    };
  }
  
  const counter = createCounter(10);
  console.log(counter.getValue()); // 10
  console.log(counter.increment()); // 11
  console.log(counter.increment()); // 12
  console.log(counter.decrement()); // 11
  console.log(counter.reset()); // 10
  ```
- **Q:** What is the difference between closure and scope, and how do they interact?
  **A:** Scope defines variable accessibility, while closure is a function that remembers its outer variables. Closures extend the scope chain.
  ```js
  // Scope example
  function outer() {
    const outerVar = 'outer';
    
    function inner() {
      const innerVar = 'inner';
      console.log(outerVar); // Access to outer scope
      console.log(innerVar); // Access to inner scope
    }
    
    return inner; // Returns closure
  }
  
  const closure = outer();
  closure(); // Can still access outerVar due to closure
  
  // Closure chain
  function createChain() {
    let value = 0;
    
    return {
      set: (newValue) => value = newValue,
      get: () => value,
      increment: () => ++value
    };
  }
  
  const chain = createChain();
  chain.set(5);
  console.log(chain.get()); // 5
  chain.increment();
  console.log(chain.get()); // 6
  ```

---

### 16. How do setTimeout and setInterval work?
**Answer:**
- `setTimeout` runs a function once after a specified delay (in ms).
- `setInterval` runs a function repeatedly at specified intervals (in ms).

**Example:**
```js
setTimeout(() => console.log('Runs once after 1 second'), 1000);
let id = setInterval(() => console.log('Runs every second'), 1000);
clearInterval(id); // Stops the interval
```

**Interview Q&A:**
- **Q:** How do you stop a `setInterval`?
  **A:** Use `clearInterval(intervalId)`.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** What is the minimum delay for `setTimeout` and why might it not be exact?
  **A:** The minimum delay is 4ms, but actual delay depends on browser throttling, tab visibility, and system load.
  ```js
  // Minimum delay demonstration
  const start = Date.now();
  setTimeout(() => {
    const actualDelay = Date.now() - start;
    console.log(`Requested: 0ms, Actual: ${actualDelay}ms`);
  }, 0);
  
  // Browser throttling example
  setTimeout(() => console.log('1'), 1000);
  setTimeout(() => console.log('2'), 1000);
  // Both might execute at the same time due to throttling
  ```
- **Q:** How do you handle the case where `setInterval` callback takes longer than the interval time?
  **A:** The callback will queue up, potentially causing performance issues. Consider using `setTimeout` recursively for better control.
  ```js
  // Problem with setInterval
  setInterval(() => {
    // Simulate long-running task
    const start = Date.now();
    while (Date.now() - start < 2000) {} // 2 second task
    console.log('Task completed');
  }, 1000); // 1 second interval - will queue up!
  
  // Solution: Recursive setTimeout
  function scheduleNext() {
    setTimeout(() => {
      // Simulate long-running task
      const start = Date.now();
      while (Date.now() - start < 2000) {} // 2 second task
      console.log('Task completed');
      scheduleNext(); // Schedule next execution
    }, 1000);
  }
  scheduleNext();
  ```
- **Q:** What are the differences between `setTimeout` and `requestAnimationFrame`?
  **A:** `requestAnimationFrame` is optimized for animations, runs at 60fps, and pauses when the tab is not visible.
  ```js
  // setTimeout for general delays
  setTimeout(() => {
    console.log('Delayed execution');
  }, 1000);
  
  // requestAnimationFrame for smooth animations
  function animate() {
    // Update animation state
    console.log('Animation frame');
    requestAnimationFrame(animate); // Schedule next frame
  }
  requestAnimationFrame(animate);
  
  // Performance comparison
  let count = 0;
  function updateCounter() {
    count++;
    document.getElementById('counter').textContent = count;
    if (count < 100) {
      requestAnimationFrame(updateCounter); // Smooth 60fps
    }
  }
  ```

---

### 17. Describe promises in JavaScript.
**Answer:**
A Promise is an object representing the eventual completion or failure of an asynchronous operation.

**Example:**
```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Done!'), 1000);
});
promise.then(result => console.log(result)); // Done!
```

**Interview Q&A:**
- **Q:** What are the states of a promise?
  **A:** Pending, Fulfilled, Rejected.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** How do you handle multiple promises concurrently and what are the differences between `Promise.all()`, `Promise.race()`, and `Promise.allSettled()`?
  **A:** `Promise.all()` waits for all to resolve, `Promise.race()` returns the first to settle, `Promise.allSettled()` waits for all to complete regardless of outcome.
  ```js
  const promises = [
    fetch('/api/users'),
    fetch('/api/posts'),
    fetch('/api/comments')
  ];
  
  // Promise.all - fails if any promise rejects
  Promise.all(promises)
    .then(results => console.log('All succeeded:', results))
    .catch(error => console.log('One failed:', error));
  
  // Promise.race - returns first to settle (resolve or reject)
  Promise.race(promises)
    .then(result => console.log('First to complete:', result))
    .catch(error => console.log('First to fail:', error));
  
  // Promise.allSettled - waits for all, regardless of outcome
  Promise.allSettled(promises)
    .then(results => {
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          console.log(`Promise ${index} succeeded:`, result.value);
        } else {
          console.log(`Promise ${index} failed:`, result.reason);
        }
      });
    });
  ```
- **Q:** What is promise chaining and how do you handle errors in a chain?
  **A:** Promise chaining uses `.then()` to pass results between promises. Use `.catch()` at the end or in each `.then()` for error handling.
  ```js
  // Promise chaining
  fetch('/api/user/1')
    .then(response => {
      if (!response.ok) throw new Error('User not found');
      return response.json();
    })
    .then(user => {
      return fetch(`/api/posts?userId=${user.id}`);
    })
    .then(response => response.json())
    .then(posts => {
      console.log('User posts:', posts);
    })
    .catch(error => {
      console.error('Error in chain:', error);
    });
  
  // Error handling at each step
  fetch('/api/data')
    .then(response => response.json())
    .catch(error => {
      console.log('JSON parsing failed:', error);
      return { default: 'data' }; // Provide fallback
    })
    .then(data => {
      return processData(data);
    })
    .catch(error => {
      console.log('Processing failed:', error);
    });
  ```
- **Q:** How do you cancel a promise or implement timeout functionality?
  **A:** Use `AbortController` with fetch, or implement timeout using `Promise.race()` with a timeout promise.
  ```js
  // Using AbortController
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);
  
  fetch('/api/slow-data', { signal: controller.signal })
    .then(response => response.json())
    .then(data => {
      clearTimeout(timeoutId);
      console.log(data);
    })
    .catch(error => {
      if (error.name === 'AbortError') {
        console.log('Request was aborted');
      } else {
        console.log('Other error:', error);
      }
    });
  
  // Custom timeout implementation
  function timeoutPromise(ms) {
    return new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Timeout')), ms);
    });
  }
  
  Promise.race([
    fetch('/api/data'),
    timeoutPromise(5000)
  ])
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      if (error.message === 'Timeout') {
        console.log('Request timed out');
      } else {
        console.log('Other error:', error);
      }
    });
  ```

---

### 18. Use of async and await in JavaScript.
**Answer:**
`async` and `await` make working with promises easier by writing asynchronous code that looks synchronous.

**Example:**
```js
async function fetchData() {
  const result = await promise;
  console.log(result);
}
fetchData();
```

**Interview Q&A:**
- **Q:** Can you use `await` outside an `async` function?
  **A:** No, `await` must be inside an `async` function.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** How do you handle errors in async/await and what are the differences between try-catch and `.catch()`?
  **A:** Use try-catch blocks or chain `.catch()` to the async function call. Try-catch is more readable for multiple await calls.
  ```js
  // Try-catch approach
  async function fetchUserData() {
    try {
      const userResponse = await fetch('/api/user/1');
      const user = await userResponse.json();
      
      const postsResponse = await fetch(`/api/posts?userId=${user.id}`);
      const posts = await postsResponse.json();
      
      return { user, posts };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw to be handled by caller
    }
  }
  
  // .catch() approach
  async function fetchData() {
    const response = await fetch('/api/data');
    return response.json();
  }
  
  fetchData()
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  
  // Error handling with fallbacks
  async function fetchWithFallback() {
    try {
      const response = await fetch('/api/data');
      return await response.json();
    } catch (error) {
      console.log('Primary source failed, using fallback');
      return { default: 'data' };
    }
  }
  ```
- **Q:** What is the difference between `async function` and `function*` generators for handling async operations?
  **A:** Both work similarly, but arrow functions cannot be used as constructors and have different `this` binding behavior.
  ```js
  // Regular async function
  async function regularAsync() {
    const result = await fetch('/api/data');
    return result.json();
  }
  
  // Arrow async function
  const arrowAsync = async () => {
    const result = await fetch('/api/data');
    return result.json();
  };
  
  // Constructor difference
  // const instance = new regularAsync(); // Works
  // const instance = new arrowAsync(); // Error: arrowAsync is not a constructor
  
  // This binding difference
  const obj = {
    data: 'test',
    regularMethod: async function() {
      console.log(this.data);
    },
    arrowMethod: async () => {
      console.log(this.data);
    }
  };
  ```
- **Q:** How do you run multiple async operations in parallel vs sequentially?
  **A:** Use `Promise.all()` for parallel execution or await each operation sequentially for dependent operations.
  ```js
  // Sequential execution (dependent operations)
  async function sequential() {
    const user = await fetch('/api/user/1').then(r => r.json());
    const posts = await fetch(`/api/posts?userId=${user.id}`).then(r => r.json());
    const comments = await fetch(`/api/comments?userId=${user.id}`).then(r => r.json());
    
    return { user, posts, comments };
  }
  
  // Parallel execution (independent operations)
  async function parallel() {
    const [user, posts, comments] = await Promise.all([
      fetch('/api/user/1').then(r => r.json()),
      fetch('/api/posts').then(r => r.json()),
      fetch('/api/comments').then(r => r.json())
    ]);
    
    return { user, posts, comments };
  }
  
  // Mixed approach
  async function mixed() {
    const user = await fetch('/api/user/1').then(r => r.json());
    
    // Parallel requests after getting user
    const [posts, comments] = await Promise.all([
      fetch(`/api/posts?userId=${user.id}`).then(r => r.json()),
      fetch(`/api/comments?userId=${user.id}`).then(r => r.json())
    ]);
    
    return { user, posts, comments };
  }
  ```

---

### 19. Difference between call, apply, and bind.
**Answer:**
All three are used to set the `this` value of a function.
- `call`: Calls a function with a given `this` value and arguments provided individually.
- `apply`: Calls a function with a given `this` value and arguments as an array.
- `bind`: Returns a new function with a given `this` value and optional arguments.

**Example:**
```js
function greet(greeting, name) {
  console.log(greeting + ', ' + name);
}
greet.call(null, 'Hello', 'Alice'); // Hello, Alice
greet.apply(null, ['Hi', 'Bob']); // Hi, Bob
const greetHello = greet.bind(null, 'Hello');
greetHello('Charlie'); // Hello, Charlie
```

**Interview Q&A:**
- **Q:** Which one returns a new function?
  **A:** `bind`.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** How do you implement partial application using `bind` and what are the use cases?
  **A:** `bind` can pre-set arguments: `const add5 = add.bind(null, 5)`. Useful for creating specialized functions.
  ```js
  // Partial application with bind
  function add(a, b, c) {
    return a + b + c;
  }
  
  const add5 = add.bind(null, 5);
  console.log(add5(3, 2)); // 10 (5 + 3 + 2)
  
  const add5And3 = add.bind(null, 5, 3);
  console.log(add5And3(2)); // 10 (5 + 3 + 2)
  
  // Real-world example: Event handlers
  function handleClick(message, event) {
    console.log(message, event.target);
  }
  
  const handleButtonClick = handleClick.bind(null, 'Button clicked:');
  document.getElementById('button').addEventListener('click', handleButtonClick);
  
  // Currying with bind
  function multiply(a, b) {
    return a * b;
  }
  
  const multiplyBy2 = multiply.bind(null, 2);
  const multiplyBy10 = multiply.bind(null, 10);
  
  console.log(multiplyBy2(5)); // 10
  console.log(multiplyBy10(5)); // 50
  ```
- **Q:** What happens to the `this` context when using arrow functions with these methods?
  **A:** Arrow functions have lexical `this` binding, so `call`, `apply`, and `bind` cannot change their `this` context.
  ```js
  const obj = {
    name: 'Alice',
    regularMethod: function() {
      console.log(this.name);
    },
    arrowMethod: () => {
      console.log(this.name);
    }
  };
  
  const otherObj = { name: 'Bob' };
  
  // Regular function - this can be changed
  obj.regularMethod.call(otherObj); // 'Bob'
  obj.regularMethod.apply(otherObj); // 'Bob'
  const boundRegular = obj.regularMethod.bind(otherObj);
  boundRegular(); // 'Bob'
  
  // Arrow function - this cannot be changed
  obj.arrowMethod.call(otherObj); // undefined (or global name)
  obj.arrowMethod.apply(otherObj); // undefined
  const boundArrow = obj.arrowMethod.bind(otherObj);
  boundArrow(); // undefined
  ```
- **Q:** How do you handle method borrowing in JavaScript and what are the pitfalls?
  **A:** Use `call` or `apply` to borrow methods from other objects, but be careful about `this` context and method dependencies.
  ```js
  // Method borrowing
  const arrayLike = { 0: 'a', 1: 'b', length: 2 };
  
  // Borrow Array.prototype.slice
  const array = Array.prototype.slice.call(arrayLike);
  console.log(array); // ['a', 'b']
  
  // Modern alternative
  const array2 = Array.from(arrayLike);
  console.log(array2); // ['a', 'b']
  
  // Borrowing with context
  const calculator = {
    add: function(a, b) {
      return a + b;
    }
  };
  
  const mathUtils = {
    multiply: function(a, b) {
      return a * b;
    }
  };
  
  // Borrow add method
  const result = calculator.add.call(mathUtils, 5, 3);
  console.log(result); // 8
  
  // Pitfall: method dependencies
  const user = {
    name: 'Alice',
    greet: function() {
      return `Hello, ${this.name}!`;
    }
  };
  
  const admin = { name: 'Bob' };
  
  // Borrowing works
  const greeting = user.greet.call(admin);
  console.log(greeting); // 'Hello, Bob!'
  
  // But if method depends on other properties...
  const user2 = {
    name: 'Alice',
    title: 'Manager',
    greet: function() {
      return `Hello, ${this.title} ${this.name}!`;
    }
  };
  
  const admin2 = { name: 'Bob' };
  const greeting2 = user2.greet.call(admin2);
  console.log(greeting2); // 'Hello, undefined Bob!'
  ```

---

### 20. What is event delegation?
**Answer:**
Event delegation is a technique where a single event handler is added to a parent element to manage events for its child elements.

**Example:**
```js
document.getElementById('list').addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    console.log('List item clicked:', e.target.textContent);
  }
});
```

**Interview Q&A:**
- **Q:** Why use event delegation?
  **A:** It improves performance and simplifies code when handling many child elements.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** How do you implement event delegation for dynamically added elements?
  **A:** Attach the event listener to a parent element that exists when the page loads, then check the target in the event handler.
  ```js
  // Event delegation for dynamic elements
  document.getElementById('container').addEventListener('click', (e) => {
    if (e.target.matches('.delete-btn')) {
      e.target.closest('.item').remove();
    } else if (e.target.matches('.edit-btn')) {
      const item = e.target.closest('.item');
      const text = item.querySelector('.text');
      text.contentEditable = true;
      text.focus();
    }
  });
  
  // Dynamically add elements
  function addItem(text) {
    const item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = `
      <span class="text">${text}</span>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;
    document.getElementById('container').appendChild(item);
  }
  
  // These new elements will automatically work with the delegation
  addItem('New Item 1');
  addItem('New Item 2');
  ```
- **Q:** What are the performance implications of event delegation vs direct event binding?
  **A:** Event delegation reduces memory usage and improves performance for many elements, but adds slight overhead for event checking.
  ```js
  // Direct binding (many listeners)
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    item.addEventListener('click', handleClick); // Many listeners
  });
  
  // Event delegation (single listener)
  document.getElementById('container').addEventListener('click', (e) => {
    if (e.target.closest('.item')) {
      handleClick(e);
    }
  });
  
  // Performance comparison
  function benchmark() {
    const start = performance.now();
    
    // Test direct binding
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
      item.addEventListener('click', () => {});
    });
    
    const directTime = performance.now() - start;
    console.log(`Direct binding: ${directTime}ms`);
    
    // Test delegation
    const start2 = performance.now();
    document.getElementById('container').addEventListener('click', (e) => {
      if (e.target.closest('.item')) {
        // Handle click
      }
    });
    
    const delegationTime = performance.now() - start2;
    console.log(`Delegation: ${delegationTime}ms`);
  }
  ```
- **Q:** How do you handle event delegation with complex DOM structures and nested elements?
  **A:** Use `closest()` or `matches()` to check if the target or its ancestors match the desired selector.
  ```js
  // Complex DOM structure
  document.getElementById('app').addEventListener('click', (e) => {
    // Check for specific button types
    if (e.target.matches('.btn-primary')) {
      console.log('Primary button clicked');
    } else if (e.target.matches('.btn-secondary')) {
      console.log('Secondary button clicked');
    }
    
    // Check for nested elements
    const card = e.target.closest('.card');
    if (card) {
      const cardId = card.dataset.id;
      console.log('Card clicked:', cardId);
      
      // Handle specific card actions
      if (e.target.matches('.card-header')) {
        console.log('Card header clicked');
      } else if (e.target.matches('.card-body')) {
        console.log('Card body clicked');
      }
    }
    
    // Handle form elements
    if (e.target.matches('input[type="checkbox"]')) {
      const form = e.target.closest('form');
      if (form) {
        console.log('Checkbox in form:', form.id);
      }
    }
  });
  
  // HTML structure example:
  // <div id="app">
  //   <div class="card" data-id="1">
  //     <div class="card-header">Title</div>
  //     <div class="card-body">
  //       <button class="btn-primary">Save</button>
  //       <button class="btn-secondary">Cancel</button>
  //     </div>
  //   </div>
  // </div>
  ```

---

## 👨‍💻 JavaScript Interview Questions and Answers for Experienced

### 21. Explain the event loop in JavaScript.
**Answer:**
The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading operations to the browser and executing callbacks from the queue when the call stack is empty.

**Example:**
```js
console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
console.log('End');
// Output: Start, End, Timeout
```

**Interview Q&A:**
- **Q:** Why is JavaScript called single-threaded?
  **A:** It has one call stack, but the event loop enables asynchronous behavior.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** How do microtasks and macrotasks differ in the event loop, and what are examples of each?
  **A:** Microtasks (Promises, queueMicrotask) execute before the next render, while macrotasks (setTimeout, setInterval) execute after. Microtasks have higher priority.
  ```js
  console.log('1'); // Synchronous
  
  setTimeout(() => console.log('2'), 0); // Macrotask
  
  Promise.resolve().then(() => console.log('3')); // Microtask
  
  queueMicrotask(() => console.log('4')); // Microtask
  
  console.log('5'); // Synchronous
  
  // Output: 1, 5, 3, 4, 2
  ```
- **Q:** What is the difference between the call stack, web APIs, and the task queue?
  **A:** Call stack executes synchronous code, web APIs handle async operations, and task queue holds callbacks waiting to be executed.
  ```js
  // Call stack example
  function first() {
    console.log('First');
    second();
  }
  
  function second() {
    console.log('Second');
    third();
  }
  
  function third() {
    console.log('Third');
  }
  
  first(); // Call stack: first -> second -> third
  
  // Web APIs and task queue
  console.log('Start');
  
  setTimeout(() => {
    console.log('Timeout callback'); // Goes to task queue
  }, 0);
  
  fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log('Fetch callback')); // Goes to microtask queue
  
  console.log('End');
  ```
- **Q:** How do you handle blocking operations in the event loop and what are the alternatives?
  **A:** Use Web Workers for CPU-intensive tasks, break up long operations with `setTimeout`, or use async/await for non-blocking operations.
  ```js
  // Blocking operation (bad)
  function blockingOperation() {
    const start = Date.now();
    while (Date.now() - start < 5000) {
      // Blocks the main thread for 5 seconds
    }
    console.log('Blocking operation completed');
  }
  
  // Non-blocking with setTimeout (better)
  function nonBlockingOperation() {
    const start = Date.now();
    
    function process() {
      if (Date.now() - start < 5000) {
        // Do a small chunk of work
        setTimeout(process, 0); // Yield control back to event loop
      } else {
        console.log('Non-blocking operation completed');
      }
    }
    
    process();
  }
  
  // Web Worker for heavy computation
  const worker = new Worker('worker.js');
  worker.postMessage({ data: 'heavy computation' });
  worker.onmessage = (e) => {
    console.log('Worker result:', e.data);
  };
  ```

---

### 22. Difference between promises and async/await.
**Answer:**
- Promises provide a way to handle asynchronous operations using `.then()` and `.catch()`.
- `async/await` is syntactic sugar over promises, making asynchronous code look synchronous.

**Example:**
```js
// Using Promises
fetch('url').then(res => res.json()).then(data => console.log(data));

// Using async/await
async function getData() {
  const res = await fetch('url');
  const data = await res.json();
  console.log(data);
}
```

**Interview Q&A:**
- **Q:** Do async functions always return a promise?
  **A:** Yes.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** How do you handle multiple async operations with different error handling requirements?
  **A:** Use try-catch blocks for individual operations or implement custom error handling logic based on the specific requirements.
  ```js
  async function handleMultipleOperations() {
    const results = [];
    
    // Operation 1: Critical, must succeed
    try {
      const user = await fetch('/api/user').then(r => r.json());
      results.push({ type: 'user', data: user, success: true });
    } catch (error) {
      console.error('Critical user fetch failed:', error);
      throw error; // Re-throw critical errors
    }
    
    // Operation 2: Optional, can fail gracefully
    try {
      const posts = await fetch('/api/posts').then(r => r.json());
      results.push({ type: 'posts', data: posts, success: true });
    } catch (error) {
      console.warn('Optional posts fetch failed:', error);
      results.push({ type: 'posts', data: [], success: false });
    }
    
    // Operation 3: With retry logic
    let retries = 3;
    while (retries > 0) {
      try {
        const comments = await fetch('/api/comments').then(r => r.json());
        results.push({ type: 'comments', data: comments, success: true });
        break;
      } catch (error) {
        retries--;
        if (retries === 0) {
          console.error('Comments fetch failed after retries:', error);
          results.push({ type: 'comments', data: [], success: false });
        } else {
          await new Promise(resolve => setTimeout(resolve, 1000)); // Wait before retry
        }
      }
    }
    
    return results;
  }
  ```
- **Q:** What is the difference between `async function` and `function*` generators for handling async operations?
  **A:** Generators provide more control over execution flow and can yield multiple values, while async functions are simpler for most async scenarios.
  ```js
  // Async function approach
  async function asyncApproach() {
    const user = await fetch('/api/user').then(r => r.json());
    const posts = await fetch('/api/posts').then(r => r.json());
    return { user, posts };
  }
  
  // Generator approach for more control
  function* generatorApproach() {
    const user = yield fetch('/api/user').then(r => r.json());
    console.log('User loaded:', user);
    
    const posts = yield fetch('/api/posts').then(r => r.json());
    console.log('Posts loaded:', posts);
    
    return { user, posts };
  }
  
  // Runner for generator
  function runGenerator(generator) {
    return new Promise((resolve, reject) => {
      const iterator = generator();
      
      function step(value) {
        try {
          const result = iterator.next(value);
          
          if (result.done) {
            resolve(result.value);
          } else {
            Promise.resolve(result.value).then(step, reject);
          }
        } catch (error) {
          reject(error);
        }
      }
      
      step();
    });
  }
  
  // Usage
  runGenerator(generatorApproach).then(result => {
    console.log('Generator result:', result);
  });
  ```
- **Q:** How do you implement retry logic with exponential backoff using async/await?
  **A:** Use a loop with increasing delays and try-catch blocks to retry failed operations with exponential backoff.
  ```js
  async function fetchWithRetry(url, maxRetries = 3, baseDelay = 1000) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
      } catch (error) {
        console.log(`Attempt ${attempt} failed:`, error.message);
        
        if (attempt === maxRetries) {
          throw new Error(`Failed after ${maxRetries} attempts: ${error.message}`);
        }
        
        // Exponential backoff: 1s, 2s, 4s, etc.
        const delay = baseDelay * Math.pow(2, attempt - 1);
        console.log(`Waiting ${delay}ms before retry...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  // Usage
  fetchWithRetry('/api/data')
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Final error:', error));
  ```

---

### 23. Purpose of the reduce method in arrays.
**Answer:**
`reduce()` executes a reducer function on each element of the array, resulting in a single output value.

**Example:**
```js
const arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
```

**Interview Q&A:**
- **Q:** Can `reduce` be used to flatten arrays?
  **A:** Yes.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** How do you implement `map` and `filter` using `reduce`?
  **A:** Use `reduce` with conditional logic and array building to simulate `map` and `filter` functionality.
  ```js
  // Implement map using reduce
  function mapWithReduce(array, callback) {
    return array.reduce((result, item, index) => {
      result.push(callback(item, index, array));
      return result;
    }, []);
  }
  
  // Implement filter using reduce
  function filterWithReduce(array, callback) {
    return array.reduce((result, item, index) => {
      if (callback(item, index, array)) {
        result.push(item);
      }
      return result;
    }, []);
  }
  
  // Usage
  const numbers = [1, 2, 3, 4, 5];
  
  const doubled = mapWithReduce(numbers, x => x * 2);
  console.log(doubled); // [2, 4, 6, 8, 10]
  
  const evens = filterWithReduce(numbers, x => x % 2 === 0);
  console.log(evens); // [2, 4]
  
  // Combined map and filter in one reduce
  const doubledEvens = numbers.reduce((result, x) => {
    if (x % 2 === 0) {
      result.push(x * 2);
    }
    return result;
  }, []);
  console.log(doubledEvens); // [4, 8]
  ```
- **Q:** What are the performance implications of using `reduce` vs other array methods?
  **A:** `reduce` can be more efficient for complex operations that combine multiple array methods, but may be less readable.
  ```js
  const users = [
    { name: 'Alice', age: 25, active: true },
    { name: 'Bob', age: 30, active: false },
    { name: 'Charlie', age: 35, active: true }
  ];
  
  // Multiple array methods (less efficient)
  const result1 = users
    .filter(user => user.active)
    .map(user => ({ name: user.name, age: user.age }))
    .reduce((sum, user) => sum + user.age, 0);
  
  // Single reduce (more efficient)
  const result2 = users.reduce((sum, user) => {
    if (user.active) {
      return sum + user.age;
    }
    return sum;
  }, 0);
  
  console.log(result1, result2); // Both give same result
  ```
- **Q:** How do you handle async operations within `reduce`?
  **A:** Use `reduce` with async/await or return promises and handle them with `Promise.all()`.
  ```js
  // Sequential async reduce
  async function sequentialReduce(array, asyncCallback, initialValue) {
    let result = initialValue;
    
    for (const item of array) {
      result = await asyncCallback(result, item);
    }
    
    return result;
  }
  
  // Usage
  const urls = ['/api/user/1', '/api/user/2', '/api/user/3'];
  
  const users = await sequentialReduce(urls, async (acc, url) => {
    const response = await fetch(url);
    const user = await response.json();
    acc.push(user);
    return acc;
  }, []);
  
  // Parallel async reduce
  async function parallelReduce(array, asyncCallback, initialValue) {
    const promises = array.map(item => asyncCallback(initialValue, item));
    const results = await Promise.all(promises);
    return results.reduce((acc, result) => acc + result, 0);
  }
  ```

---

### 24. Explain currying in JavaScript.
**Answer:**
Currying is a technique of converting a function that takes multiple arguments into a sequence of functions, each taking a single argument.

**Example:**
```js
function add(a) {
  return function(b) {
    return a + b;
  }
}
console.log(add(2)(3)); // 5
```

**Interview Q&A:**
- **Q:** Why use currying?
  **A:** For function reuse and partial application.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** How do you implement automatic currying for functions with any number of arguments?
  **A:** Use a wrapper function that checks the number of arguments and returns a curried function or the final result.
  ```js
  function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        return function(...moreArgs) {
          return curried.apply(this, args.concat(moreArgs));
        };
      }
    };
  }
  
  // Usage
  function add(a, b, c) {
    return a + b + c;
  }
  
  const curriedAdd = curry(add);
  
  console.log(curriedAdd(1)(2)(3)); // 6
  console.log(curriedAdd(1, 2)(3)); // 6
  console.log(curriedAdd(1)(2, 3)); // 6
  console.log(curriedAdd(1, 2, 3)); // 6
  ```
- **Q:** What are the differences between currying and partial application?
  **A:** Currying transforms a function to take one argument at a time, while partial application fixes some arguments and returns a function with fewer parameters.
  ```js
  // Currying (one argument at a time)
  function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      }
      return function(...moreArgs) {
        return curried.apply(this, args.concat(moreArgs));
      };
    };
  }
  
  // Partial application (fix multiple arguments)
  function partial(fn, ...fixedArgs) {
    return function(...remainingArgs) {
      return fn.apply(this, fixedArgs.concat(remainingArgs));
    };
  }
  
  // Example
  function greet(greeting, name, punctuation) {
    return `${greeting}, ${name}${punctuation}`;
  }
  
  // Currying
  const curriedGreet = curry(greet);
  const helloGreet = curriedGreet('Hello');
  const helloAliceGreet = helloGreet('Alice');
  console.log(helloAliceGreet('!')); // "Hello, Alice!"
  
  // Partial application
  const helloPartial = partial(greet, 'Hello');
  console.log(helloPartial('Alice', '!')); // "Hello, Alice!"
  ```

---

### 25. What is a generator function and its usage?
**Answer:**
A generator function can pause execution and resume later, producing a sequence of results instead of a single value. Defined with `function*`.

**Example:**
```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
const g = gen();
console.log(g.next().value); // 1
console.log(g.next().value); // 2
```

**Interview Q&A:**
- **Q:** What is the use of generators?
  **A:** To handle asynchronous flows, lazy evaluation, and custom iterators.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** How do you implement async generators and what are their use cases?
  **A:** Use `async function*` to yield promises and handle async operations with `for await...of` loops.
  ```js
  // Async generator for paginated data
  async function* paginatedData(url) {
    let page = 1;
    let hasMore = true;
    
    while (hasMore) {
      const response = await fetch(`${url}?page=${page}`);
      const data = await response.json();
      
      if (data.items.length === 0) {
        hasMore = false;
      } else {
        yield data.items;
        page++;
      }
    }
  }
  
  // Usage with for await...of
  async function processAllData() {
    for await (const items of paginatedData('/api/users')) {
      console.log('Processing page:', items);
      // Process each page of items
    }
  }
  ```
- **Q:** How do generators help with memory efficiency in large data processing?
  **A:** Generators can process data one item at a time, reducing memory usage compared to loading all data into memory.
  ```js
  // Memory-intensive approach (loads all data)
  function getAllNumbers() {
    const numbers = [];
    for (let i = 0; i < 1000000; i++) {
      numbers.push(i);
    }
    return numbers;
  }
  
  // Memory-efficient generator approach
  function* numberGenerator() {
    for (let i = 0; i < 1000000; i++) {
      yield i;
    }
  }
  
  // Process large dataset without loading all into memory
  function processLargeDataset() {
    let sum = 0;
    let count = 0;
    
    for (const num of numberGenerator()) {
      sum += num;
      count++;
      
      if (count % 100000 === 0) {
        console.log(`Processed ${count} numbers, current sum: ${sum}`);
      }
    }
    
    return sum;
  }
  ```

---

### 26. What are weak maps and weak sets in JavaScript?
**Answer:**
- `WeakMap` is a collection of key/value pairs where keys must be objects and are weakly referenced.
- `WeakSet` is a collection of objects, also weakly referenced.
- They do not prevent garbage collection if there are no other references to the object.

**Example:**
```js
let obj = {};
let wm = new WeakMap();
wm.set(obj, 'value');
let ws = new WeakSet();
ws.add(obj);
```

**Interview Q&A:**
- **Q:** Can you iterate over a WeakMap or WeakSet?
  **A:** No.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** What are the use cases for WeakMap and WeakSet in real-world applications?
  **A:** WeakMap is useful for storing metadata about objects without preventing garbage collection. WeakSet is good for tracking object existence.
  ```js
  // WeakMap for storing metadata
  const metadata = new WeakMap();
  
  class User {
    constructor(name) {
      this.name = name;
    }
  }
  
  const user1 = new User('Alice');
  const user2 = new User('Bob');
  
  // Store metadata without preventing garbage collection
  metadata.set(user1, { lastLogin: new Date(), loginCount: 5 });
  metadata.set(user2, { lastLogin: new Date(), loginCount: 2 });
  
  console.log(metadata.get(user1)); // { lastLogin: Date, loginCount: 5 }
  
  // When user1 is no longer referenced, it can be garbage collected
  // along with its metadata
  
  // WeakSet for tracking object existence
  const processedUsers = new WeakSet();
  
  function processUser(user) {
    if (processedUsers.has(user)) {
      console.log('User already processed');
      return;
    }
    
    // Process user...
    console.log('Processing user:', user.name);
    processedUsers.add(user);
  }
  
  processUser(user1); // "Processing user: Alice"
  processUser(user1); // "User already processed"
  ```
- **Q:** How do WeakMap and WeakSet differ from Map and Set in terms of memory management?
  **A:** Weak collections allow garbage collection of keys/values when no other references exist, preventing memory leaks.
  ```js
  // Regular Map - keeps references
  const regularMap = new Map();
  let obj1 = { name: 'Alice' };
  regularMap.set(obj1, 'data');
  
  obj1 = null; // obj1 can't be garbage collected because Map holds reference
  
  // WeakMap - allows garbage collection
  const weakMap = new WeakMap();
  let obj2 = { name: 'Bob' };
  weakMap.set(obj2, 'data');
  
  obj2 = null; // obj2 can be garbage collected, WeakMap entry will be removed
  
  // Memory leak prevention example
  class Cache {
    constructor() {
      this.cache = new WeakMap(); // Won't prevent garbage collection
    }
    
    set(key, value) {
      this.cache.set(key, value);
    }
    
    get(key) {
      return this.cache.get(key);
    }
  }
  
  const cache = new Cache();
  let user = { id: 1, name: 'Alice' };
  cache.set(user, { data: 'some data' });
  
  user = null; // User can be garbage collected, cache entry will be cleaned up
  ```

---

### 27. How does JavaScript handle memory management?
**Answer:**
JavaScript uses automatic garbage collection. It frees up memory that is no longer referenced by any variable or object.

**Example:**
```js
let a = { name: 'Alice' };
a = null; // The object can now be garbage collected
```

**Interview Q&A:**
- **Q:** What causes memory leaks?
  **A:** Unintentionally holding references to objects that are no longer needed.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** How do you identify and fix memory leaks in JavaScript applications?
  **A:** Use browser dev tools (Memory tab), look for detached DOM trees, and ensure proper cleanup of event listeners and timers.
  ```js
  // Memory leak detection
  class MemoryLeakDetector {
    constructor() {
      this.initialMemory = performance.memory?.usedJSHeapSize || 0;
    }
    
    check() {
      const currentMemory = performance.memory?.usedJSHeapSize || 0;
      const increase = currentMemory - this.initialMemory;
      console.log(`Memory increase: ${(increase / 1024 / 1024).toFixed(2)} MB`);
    }
  }
  
  // Common memory leak patterns and fixes
  
  // 1. Event listener leaks
  class Component {
    constructor() {
      this.handleClick = this.handleClick.bind(this);
      document.addEventListener('click', this.handleClick);
    }
    
    handleClick() {
      console.log('Clicked');
    }
    
    destroy() {
      // Fix: Remove event listener
      document.removeEventListener('click', this.handleClick);
    }
  }
  
  // 2. Timer leaks
  class TimerComponent {
    constructor() {
      this.intervalId = setInterval(() => {
        console.log('Timer tick');
      }, 1000);
    }
    
    destroy() {
      // Fix: Clear interval
      clearInterval(this.intervalId);
    }
  }
  ```
- **Q:** What is the difference between reference counting and mark-and-sweep garbage collection?
  **A:** Reference counting tracks references to objects, while mark-and-sweep traverses the object graph to find unreachable objects.
  ```js
  // Reference counting example (conceptual)
  let obj1 = { name: 'Alice' }; // Reference count: 1
  let obj2 = obj1; // Reference count: 2
  
  obj1 = null; // Reference count: 1
  obj2 = null; // Reference count: 0, can be garbage collected
  
  // Circular reference problem with reference counting
  let objA = { name: 'A' };
  let objB = { name: 'B' };
  
  objA.ref = objB; // objB reference count: 2
  objB.ref = objA; // objA reference count: 2
  
  objA = null; // objA reference count: 1 (from objB.ref)
  objB = null; // objB reference count: 1 (from objA.ref)
  // Neither can be garbage collected due to circular reference
  
  // Mark-and-sweep can handle circular references
  // It marks all reachable objects from root (global scope)
  // Then sweeps unmarked objects
  ```

---

### 28. Difference between shallow and deep copying.
**Answer:**
- **Shallow copy:** Copies only the first level. Nested objects are still referenced.
- **Deep copy:** Copies all levels, creating new nested objects.

**Example:**
```js
let obj1 = { a: 1, b: { c: 2 } };
let shallow = { ...obj1 };
let deep = JSON.parse(JSON.stringify(obj1));
shallow.b.c = 5;
console.log(obj1.b.c); // 5 (shallow copy)
deep.b.c = 10;
console.log(obj1.b.c); // 5 (deep copy is independent)
```

**Interview Q&A:**
- **Q:** How do you perform a deep copy?
  **A:** Use `structuredClone`, `JSON.parse(JSON.stringify(obj))`, or libraries like Lodash.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** What are the limitations of using `JSON.parse(JSON.stringify())` for deep copying?
  **A:** It cannot handle functions, undefined values, or circular references, and may lose precision with certain data types.
  ```js
  // Limitations of JSON.parse(JSON.stringify())
  const original = {
    string: 'hello',
    number: 42,
    boolean: true,
    null: null,
    undefined: undefined, // Will be lost
    function: () => console.log('hello'), // Will be lost
    date: new Date(), // Will become string
    regex: /test/g, // Will become empty object
    symbol: Symbol('test'), // Will be lost
    circular: null
  };
  
  // Create circular reference
  original.circular = original;
  
  try {
    const copied = JSON.parse(JSON.stringify(original));
    console.log(copied);
    // Result: { string: 'hello', number: 42, boolean: true, null: null, date: '2023-...', regex: {} }
    // Missing: undefined, function, symbol, circular
  } catch (error) {
    console.log('Circular reference error:', error.message);
  }
  
  // Better alternatives
  // 1. structuredClone (modern browsers)
  const structuredCopy = structuredClone(original);
  
  // 2. Custom deep copy function
  function deepCopy(obj, visited = new WeakMap()) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
    
    if (visited.has(obj)) {
      return visited.get(obj);
    }
    
    if (obj instanceof Date) {
      return new Date(obj.getTime());
    }
    
    if (obj instanceof RegExp) {
      return new RegExp(obj);
    }
    
    const copy = Array.isArray(obj) ? [] : {};
    visited.set(obj, copy);
    
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key], visited);
      }
    }
    
    return copy;
  }
  ```

---

### 29. What is strict mode in JavaScript and how is it enabled?
**Answer:**
Strict mode makes JavaScript more secure by throwing errors for unsafe actions.
Enable it by adding `'use strict';` at the top of a script or function.

**Example:**
```js
'use strict';
x = 10; // Error: x is not defined
```

**Interview Q&A:**
- **Q:** Can you enable strict mode for a single function?
  **A:** Yes, by placing `'use strict';` inside the function.

**Extra Interview Questions (5+ YOE Level):**
- **Q:** What are the differences between strict mode and non-strict mode in terms of error handling?
  **A:** Strict mode throws errors for common mistakes that would be silent in non-strict mode, making debugging easier.
  ```js
  // Non-strict mode (silent failures)
  function nonStrict() {
    undeclaredVar = 10; // Creates global variable (bad)
    console.log(undeclaredVar);
  }
  
  // Strict mode (throws errors)
  function strict() {
    'use strict';
    // undeclaredVar = 10; // ReferenceError: undeclaredVar is not defined
  }
  
  // More strict mode differences
  function strictModeExamples() {
    'use strict';
    
    // 1. No duplicate parameter names
    // function duplicateParams(a, a) {} // SyntaxError
    
    // 2. No octal literals
    // const octal = 010; // SyntaxError
    const octal = 0o10; // Correct octal syntax
    
    // 3. No deleting undeletable properties
    // delete Object.prototype; // TypeError
    
    // 4. No duplicate property names in objects
    const obj = {
      prop: 1,
      // prop: 2 // SyntaxError in strict mode
    };
    
    // 5. No with statement
    // with (obj) { prop = 2; } // SyntaxError
  }
  ```
- **Q:** How does strict mode affect the `this` context in functions?
  **A:** In strict mode, `this` is undefined for function calls without explicit context, while in non-strict mode it defaults to the global object.
  ```js
  // Non-strict mode
  function nonStrictFunction() {
    console.log(this); // global object (window in browser)
  }
  
  // Strict mode
  function strictFunction() {
    'use strict';
    console.log(this); // undefined
  }
  
  // Function calls
  nonStrictFunction(); // global object
  strictFunction(); // undefined
  
  // Method calls (same in both modes)
  const obj = { name: 'Alice' };
  
  obj.nonStrict = nonStrictFunction;
  obj.strict = strictFunction;
  
  obj.nonStrict(); // { name: 'Alice', nonStrict: [Function] }
  obj.strict(); // { name: 'Alice', strict: [Function] }
  ```

---

### 30. Observer pattern and its relation to JavaScript.
**Answer:**
The observer pattern is a design pattern where an object (subject) maintains a list of dependents (observers) and notifies them of state changes.

**Example:**
```js
class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(fn) {
    this.observers.push(fn);
  }
  notify(data) {
    this.observers.forEach(fn => fn(data));
  }
}
const subject = new Subject();
subject.subscribe(data => console.log('Observer 1:', data));
subject.notify('Hello'); // Observer 1: Hello
```

**Interview Q&A:**
- **Q:** Where is the observer pattern used in JS?
  **A:** In event handling, RxJS, and frameworks like React (state management).

**Extra Interview Questions (5+ YOE Level):**
- **Q:** How do you implement a pub/sub system using the observer pattern?
  **A:** Create a central event bus that manages subscriptions and notifications, allowing decoupled communication between components.
  ```js
  class EventBus {
    constructor() {
      this.events = {};
    }
    
    subscribe(event, callback) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(callback);
      
      // Return unsubscribe function
      return () => {
        this.events[event] = this.events[event].filter(cb => cb !== callback);
      };
    }
    
    publish(event, data) {
      if (this.events[event]) {
        this.events[event].forEach(callback => {
          try {
            callback(data);
          } catch (error) {
            console.error('Error in event handler:', error);
          }
        });
      }
    }
    
    unsubscribe(event, callback) {
      if (this.events[event]) {
        this.events[event] = this.events[event].filter(cb => cb !== callback);
      }
    }
  }
  
  // Usage
  const eventBus = new EventBus();
  
  // Subscribe to events
  const unsubscribeUserUpdate = eventBus.subscribe('user:updated', (user) => {
    console.log('User updated:', user);
  });
  
  const unsubscribeUserDelete = eventBus.subscribe('user:deleted', (userId) => {
    console.log('User deleted:', userId);
  });
  
  // Publish events
  eventBus.publish('user:updated', { id: 1, name: 'Alice' });
  eventBus.publish('user:deleted', 1);
  
  // Unsubscribe
  unsubscribeUserUpdate();
  ```
- **Q:** What are the differences between the observer pattern and the mediator pattern?
  **A:** Observer pattern allows loose coupling between subjects and observers, while mediator pattern centralizes communication through a mediator object.
  ```js
  // Observer Pattern (loose coupling)
  class Subject {
    constructor() {
      this.observers = [];
    }
    
    subscribe(observer) {
      this.observers.push(observer);
    }
    
    unsubscribe(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
    
    notify(data) {
      this.observers.forEach(observer => observer.update(data));
    }
  }
  
  class Observer {
    constructor(name) {
      this.name = name;
    }
    
    update(data) {
      console.log(`${this.name} received:`, data);
    }
  }
  
  // Mediator Pattern (centralized communication)
  class Mediator {
    constructor() {
      this.components = new Map();
    }
    
    register(name, component) {
      this.components.set(name, component);
      component.setMediator(this);
    }
    
    notify(sender, event, data) {
      // Centralized logic for handling communication
      switch (event) {
        case 'user:login':
          this.components.get('auth').handleLogin(data);
          this.components.get('ui').updateUserInfo(data);
          break;
        case 'user:logout':
          this.components.get('auth').handleLogout();
          this.components.get('ui').clearUserInfo();
          break;
      }
    }
  }
  
  class Component {
    constructor(name) {
      this.name = name;
      this.mediator = null;
    }
    
    setMediator(mediator) {
      this.mediator = mediator;
    }
    
    send(event, data) {
      this.mediator.notify(this.name, event, data);
    }
  }
  
  // Usage comparison
  // Observer: Direct communication
  const subject = new Subject();
  const observer1 = new Observer('Logger');
  const observer2 = new Observer('UI');
  
  subject.subscribe(observer1);
  subject.subscribe(observer2);
  subject.notify('User logged in');
  
  // Mediator: Centralized communication
  const mediator = new Mediator();
  const auth = new Component('auth');
  const ui = new Component('ui');
  
  mediator.register('auth', auth);
  mediator.register('ui', ui);
  
  auth.send('user:login', { id: 1, name: 'Alice' });
  ```
- **Q:** How do you handle memory leaks in observer pattern implementations?
  **A:** Ensure proper cleanup by unsubscribing observers when they are no longer needed, and use weak references where appropriate.
  ```js
  // Memory leak prevention in observer pattern
  class SafeSubject {
    constructor() {
      this.observers = new WeakSet(); // Weak references
      this.observerRefs = []; // Keep strong references for cleanup
    }
    
    subscribe(observer) {
      this.observers.add(observer);
      this.observerRefs.push(observer);
    }
    
    unsubscribe(observer) {
      this.observers.delete(observer);
      this.observerRefs = this.observerRefs.filter(obs => obs !== observer);
    }
    
    notify(data) {
      // Clean up dead references
      this.observerRefs = this.observerRefs.filter(observer => {
        if (this.observers.has(observer)) {
          try {
            observer.update(data);
            return true;
          } catch (error) {
            console.error('Observer error:', error);
            return false;
          }
        }
        return false;
      });
    }
    
    cleanup() {
      this.observerRefs = [];
    }
  }
  
  // Component with automatic cleanup
  class Component {
    constructor(subject) {
      this.subject = subject;
      this.unsubscribe = this.subject.subscribe(this);
    }
    
    update(data) {
      console.log('Component received:', data);
    }
    
    destroy() {
      // Important: Clean up subscription
      if (this.unsubscribe) {
        this.unsubscribe();
      }
    }
  }
  
  // Usage with proper cleanup
  const subject = new SafeSubject();
  
  function createComponent() {
    const component = new Component(subject);
    
    // Simulate component lifecycle
    setTimeout(() => {
      component.destroy(); // Clean up subscription
    }, 5000);
    
    return component;
  }
  
  const component = createComponent();
  
  // Clean up when done
  setTimeout(() => {
    subject.cleanup();
  }, 10000);
  ```

---
function palindrome(str) {
  if (str === str.toLowerCase().split("").reverse().join("")) {
    return true;
  }
  return false;

  //Reversing string without inbuilt reverse function
  //   let rev = ""
  //   for(let i=str.split("").length;i>=0;i--){
  //   rev += str[i]
  // }
  // console.log("Revised String:",rev)
}

console.log(palindrome("ABACDE"));

//Write a function to return an array with only even numbers from a given array.

function evenNumbers(arr) {
  let evenArr = arr.filter((num) => num % 2 == 0);
  return evenArr;
}
console.log(evenNumbers([1, 2, 4, 5, 6, 7, 8, 99, 24]));

//Write a function that returns a factorial of a given number

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(5));

//Write a function that returns true if a given number is prime or not

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    //console.log(i);
    if (num % i == 0) {
      //console.log("inside");
      return false;
    }
  }
  return true;
}
console.log(isPrime(31));

//Write a JavaScript program to find the largest element in a nested array
let largest = null;

//Takes any value array or any primitive value
function largestValue(value) {
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      if (Array.isArray(value[i])) {
        largestValue(value[i]);
      }
      if (value[i] > largest) largest = value[i];
    }
    return largest;
  }
  return value;
}

function findLargestElement(nestedArr) {
  //let largestNumber = null;
  for (let arr of nestedArr) {
    //console.log(arr)
    largestValue(arr);
  }
  console.log(largest);
}

findLargestElement([1, 2, 3, [3, [[422], [123, 425, [321, 8966]]]], 1]);

//Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

//5-> 0,1,1,2,3

function fibonacci(num) {
  let arr = [];
  let temp = 0;

  for (let i = 0; i < 5; i++) {
    temp = i;
    if (arr.length >= 2) {
      arr.push(arr[i - 1] + arr[i - 2]);
    } else {
      arr.push(temp);
    }
  }

  return arr.toString();
}

console.log(fibonacci(5));

//Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).

function capitalizeFirstLetter(str) {
  let rev = str.split("")[0].toUpperCase().concat(str.substring(1, str.length));
  console.log(rev);
}

capitalizeFirstLetter("jyoti");

//1. Implement a debounce function in JavaScript that limits the frequency of a function’s execution when it’s called repeatedly within a specified time frame.

let interval = null;

function debounce(cb) {
  if (interval) {
    console.log("Already running");
    clearTimeout(interval);
  }
  interval = setTimeout(cb, 200);
  console.log("Inside");
}

debounce(() => console.log("I am running"));

setTimeout(() => {
  debounce(() => console.log("I am running"));
  debounce(() => console.log("I am running"));
}, 100);

// Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order

//[{1:23},{1:47},{1:13},{1:93}] ==> [{1:13},{1:23},{1:47},{1:93}]

let array = [{ 1: 25 }, { 1: 12 }, { 1: 13 }];
let flag = true;

function sortArr(arr, key) {
  flag = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][key] > arr[i + 1][key]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      flag = true;
    }
  }
}

function sortKey(arr, key) {
  while (flag) {
    //flag = false; // reset flag before sorting
    sortArr(arr, key);
  }
  return arr;
}

//Another Approach
// function sortByKey(arr, key) {

//   return arr.sort((a, b) => a[key] – b[key]);

// }

console.log(sortKey([{ 1: 23 }, { 1: 47 }, { 1: 13 }, { 1: 93 }], 1));

//Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original.

function deepCopy(arr) {
  return JSON.parse(JSON.stringify(arr));
}

let a = [1, [2, 3], 4];

const clone = structuredClone(a);
let b = deepCopy(a);

a[1] = "Jyoti Pagal";

console.log(a);
console.log(b);
console.log(clone);

//Implement factorial of a number using recursive function

function fact(num){
  if(num === 1 || num === 0){
    return 1
  }

  return num * fact(num - 1)
}

console.log(fact(5))
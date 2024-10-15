// Question 2: Can you write a function in JavaScript to remove duplicate elements from an array?

let array = ["A", "B", "A", "F", "E", "F"];
let arrWithoutDuplicate = [];

for (let i = 0; i <= array.length - 1; i++) {
    if (!arrWithoutDuplicate.includes(array[i])) {
        arrWithoutDuplicate.push(array[i]);
    }
}

console.log(arrWithoutDuplicate);
let setArr = [...new Set(array)];
console.log(setArr);

//Question 5: Can you write a function in JavaScript to calculate the cumulative sum of an array?


const arr =[1,4,2,4,2,6,5]

const sumArray = arr.reduce((acc,curr)=>acc+curr)
console.log(sumArray)

const cumulativeSum = arr => arr.reduce((acc, num) => [...acc, acc.length ? acc[acc.length - 1] + num : num], []);

console.log(cumulativeSum(arr))
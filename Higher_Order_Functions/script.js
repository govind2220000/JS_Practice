//Higher Order Functions map,filter,reduce

const nums = [1, 2, 3, 4];

//whenever we write callback function using {} so here we have to return explicitly but if we write using () we dont have to return explicitly

// const mul = nums.map((n) => {
//   return n * 3;
// });

const map_mul = nums.map((n) => n * 3);

console.log(map_mul);

const filter_mul = nums.filter((n) => {
  if (n > 2) {
    return n;
  }
});

console.log(filter_mul);

//if there is no initial value it takes first element of array as vale for accumaltor

// const nums = [1, 2, 3, 4];

//ow, let’s see how reduce works in your code:

// In the first call to the reducer function, acc is 0 (the initial value), and curr is 1 (the first element of the array). The function returns 0 + 1, which is 1. This value is the new accumulator value for the next call.
// In the second call, acc is 1 (the result of the previous call), and curr is 2 (the second element of the array). The function returns 1 + 2, which is 3. This value is the new accumulator value for the next call.
// This process continues for the rest of the array. After the last call, the final result of reduce is 10, which is the sum of all numbers in the array.

const reduce_mul = nums.reduce((acc, curr) => {
  console.log(`accumulaotr: ${acc} and curr: ${curr}`);
  return acc + curr;
}, 0);

console.log(reduce_mul);

//PolyFill for map()

//Array.map((n) => n * 3);

Array.prototype.MyMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    //this refers complete array
    //this[i] refers array element at index i
    //i refers the index
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

const prototype_map_mul = nums.MyMap((num) => num * 3);

console.log(prototype_map_mul);

//PolyFill for filter()

Array.prototype.MyFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};
const prototype_filter_mul = nums.MyFilter((num) => num > 2);

console.log(prototype_filter_mul);

//PolyFill for reduce()

Array.prototype.MyReduce = function (cb, initialValue) {
  let accumaltor = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumaltor = accumaltor ? cb(accumaltor, this[i], i, this) : this[i];
  }
  return accumaltor;
};

const prototype_reduce_mul = nums.MyReduce((acc, curr) => acc + curr, 0);

console.log(prototype_reduce_mul);

//Difference bbetween map and forEach

const arr = [1, 2, 3, 4];

const resultMap = arr.map((n) => n + 2);

const resultForEach = arr.forEach((arr) => arr);
//const resultForEach = arr.forEach((value, i) => (arr[i] = value + 2));

console.log(resultMap, resultForEach);

//map will return us a new array with modified details also on map we can also perform chaining operations like filter and reduce.
//forEach will not return anything by its own if we want any changes then we have to do change on the existing array itself refer comments

let students = [
  { name: "Piyush", marks: 80, rollNumber: 15 },
  { name: "Piyush1", marks: 69, rollNumber: 78 },
  { name: "Piyush2", marks: 35, rollNumber: 19 },
  { name: "Piyush3", marks: 35, rollNumber: 7 },
  { name: "Piyush4", marks: 55, rollNumber: 7 },
];
//map
const names = students.map((stu) => stu.name.toUpperCase());
console.log(names);

//filter
//student details with more than 60 marks
const marks = students.filter((stu) => {
  if (stu.marks > 60) return stu; //Always rememeber here it will return the complete object if cindition satisfies it will not return anything specific for eg if we try to return stu.marks then also it will return the complete stu object only.

  //The filter method in JavaScript creates a new array with all elements that pass the test implemented by the provided function. The function you provide to the filter method should return true for elements you want to keep and false for those you want to remove.

  //In your case, you’re returning stu.marks which is a number, not a boolean. If stu.marks is greater than 60, it will be considered as true and the whole stu object will be included in the new array. If stu.marks is not greater than 60, undefined will be returned, which is considered as false, so those students will not be included in the new array.

  //If you want to get an array of marks of the students who scored more than 60, you should use the map method instead of filter. Here’s how you can do it:
});

console.log(marks);

//student details with more than 60 marks and rollNo >15
const marksWithRollNo = students.filter(
  (stu) => stu.marks > 60 && stu.rollNumber > 15
);

console.log(marksWithRollNo);

//reduce

const sumOfMarks = students.reduce((acc, curr) => {
  console.log(acc);
  return acc + curr.marks;
}, 0);

console.log(sumOfMarks);

//return only names of student who scored more than 60

// The filter function in JavaScript is used to create a new array with all elements that pass the test implemented by the provided function. In your case, you’re testing if stu.marks > 60. The filter function doesn’t modify the elements themselves, it just decides whether to include each element in the new array based on the return value of the callback function.

// When you return stu.name;, you’re not telling filter to include stu.name in the new array. Instead, you’re just returning a truthy value (the name of the student, which is a non-empty string) which causes filter to include the current element (stu) in the new array.

// If you want to get an array of names of students with good marks, you should use filter to get the students with good marks, and then map to get their names. Here’s how you can do it:

//Wrong scenario
// const namesWithGoodMarks = students.filter((stu) => {
//   if (stu.marks > 60) {
//     return stu.name;
//   }
// });

const namesWithGoodMarks = students
  .filter((stu) => stu.marks > 60)
  .map((stu) => stu.name);
console.log(namesWithGoodMarks);

// Return total marks for students with marks greater than 60
// after 20 marks have been added to those who scored less than 60

const graceMarks = students
  .map((stu) => {
    if (stu.marks < 60) stu.marks += 20;
    return stu;
  })
  .filter((stu) => stu.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0); //we cant dynamically pass any value for accumulator here as we r having an array of three objects and we have to provide some initial accumulator value so we have to pass 0 if the scenario would have been something like we are having an array of numbers so then we can have left the accumulator value as if we dont pass any value for accumualtor so it would take 1st element of array which will be number here but in our scenatio its an array of object and hence we have to pass 0 as accumulator value.

console.log(graceMarks);

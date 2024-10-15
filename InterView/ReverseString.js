//Question 1: Can you write a function in JavaScript to reverse the order 
//of words in a given string?


// let a = "ABCDEF"

// console.log(a.split("").reverse().join(""))

// console.log(a.length)

// arr = a.split("")
// let reverseString = []
// for (let i=a.length-1;i>=0;i--){
//   reverseString.push(arr[i])
// }
// console.log(reverseString.join(""))
// function reverseBuiltinFn(str){
//   return str.split("").reverse().join("")
// }

function reverseWithoutBuiltInFn(str){
  let reverseString = []
  for (let i=str.length-1;i>=0;i--){
    reverseString.push(str[i])
  }
  return reverseString.join("")
}

console.log(reverseWithoutBuiltInFn("ABCDEF"))

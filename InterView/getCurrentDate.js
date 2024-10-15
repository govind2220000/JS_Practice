//Question 4: Can you write a function in JavaScript to get the current date in the format “YYYY-MM-DD”?


console.log(new Date().toISOString().split("T")[0])
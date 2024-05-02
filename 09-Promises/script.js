//Promises in JavaScript
//Callbacks

// console.log("start");

// function importantAction(username) {
//   setTimeout(() => {
//     return `Hello ${username}`;
//   }, 100);
// }

// const message = importantAction("Govind");
// console.log(message);

// console.log("stop");

//To resolve the above issue we can use callbacks as we know setTimeout are asynchronous hence in above scenario whenever we try to console the message variable we get undefined
// console.log("start");

// function importantAction(username, cb) {
//   setTimeout(() => {
//     cb(`Hello ${username}`);
//   }, 100);
// }

// //Suppose now we have to call one more function but that function should be executed after the importantAction function is executed.

// function greet(greetmsg, cb) {
//   setTimeout(() => {
//     cb(greetmsg);
//   }, 50);
// }

// const message = importantAction("Govind", (message) => {
//   //this arrow function is a callback here
//   console.log(message);
//   greet("Whats up", (greetmsg) => {
//     console.log(`${message} ${greetmsg}`);
//   });
// });

// console.log("stop");

// //Promises basic example
// console.log("--------------------------------------------------");
// console.log("Promise start");

//have written the above thing using promises from line 80

const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) resolve("Subscribed Govind");
    reject(new Error("Why arent u subscribed"));
  }, 100);
});

sub
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err);
  });

console.log("Promise End");
console.log("--------------------------------------------------");

//If we wan promise to be resolved by default

console.log("--------------------------------------------------");
console.log("Promise start");

const stub = Promise.resolve("Subscribed to Govind");
console.log(stub);
stub.then((res) => console.log(res));
console.log("Promise End");
console.log("--------------------------------------------------");

console.log("--------------------------------------------------");
console.log("Promise start");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hello ${username}`);
    }, 100);
  });
}

//Suppose now we have to call one more function but that function should be executed after the importantAction function is executed.

// function greet(greetmsg) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(greetmsg);
//     }, 50);
//   });
// }

// const message = importantAction("Govind")  //here we are not returning a promise here we are waiting for the promise to resolve then go on
//   .then((res) => {
//     console.log(res);
//     greet("Whats up").then((res) => console.log(res));
//   })
//   .catch((err) => console.log(err));

// console.log("--------------------------------------------------");
// console.log("stop");

//Lets see one more approach of promise chaining it is cleaner than the above two methods

function greet(greetmsg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(greetmsg);
    }, 50);
  });
}

const message = importantAction("Govind")
  .then((res) => {
    console.log(res);
    return greet("Whats up"); //here we are returning a promise
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

console.log("--------------------------------------------------");
console.log("stop");

//Promise Combinator

//Remember if even one promise fails the complete chain will fail
console.log("--------------------------------------------------");
console.log("Promise start");

Promise.all([importantAction("Govind"), greet("Whats up")])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

console.log("--------------------------------------------------");
console.log("stop");

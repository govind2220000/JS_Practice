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

//Promise Combinators

// a.Promise.all
//Remember if even one promise fails the complete chain will fail
console.log("--------------------------------------------------");
console.log("Promise start");

Promise.all([importantAction("Govind"), greet("Whats up")])
  .then((res) => console.log("Promise all Combinator", res))
  .catch((err) => console.log(err));

console.log("--------------------------------------------------");
console.log("stop");

// b. Promise.race
//Here it will only return the promise which will be resolved first
console.log("--------------------------------------------------");
console.log("Promise start");

Promise.race([importantAction("Govind"), greet("Whats up")])
  .then((res) => console.log("From race combinator", res))
  .catch((err) => console.log("From race combinator", err));

console.log("--------------------------------------------------");
console.log("stop");

// c. Promise.allSettled
//Here it will return all the resolved promises suppose if a promise fails also then also it will return the promises that were resolved
console.log("--------------------------------------------------");
console.log("Promise start");

Promise.allSettled([importantAction("Govind"), greet("Whats up")])
  .then((res) => console.log("From allSettled combinator", res))
  .catch((err) => console.log("From allSettled combinator", err));

console.log("--------------------------------------------------");
console.log("stop");

// d. Promise.any
//Here it will return the last resolved promise i.e. suppose we were having three promises after a certain timeout so the last promise which ot resolved it will return that only suppose if all promise fails also then also it will throw error
console.log("--------------------------------------------------");
console.log("Promise start");

Promise.any([importantAction("Govind"), greet("Whats up")])
  .then((res) => console.log("From any combinator", res))
  .catch((err) => console.log("From any combinator", err));

console.log("--------------------------------------------------");
console.log("stop");

//Async await

const result = async () => {
  console.log("--------------------------------------------------");
  console.log("Async Promise start");
  const msg1 = await importantAction("From Async Await msg1");
  console.log(msg1);
  const msg2 = await importantAction("From Async Await msg2");
  console.log(msg2);
  console.log("--------------------------------------------------");
  console.log("Async stop");
};

result();

//Q2 - Whats the output

console.log("Q2 start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1); //this will be logged after the Q1 start because javascript always executes the synchronous code first so here while we are creating our Promsise it will check whether there is any synchronous code present or not so if present it will execute that first
  resolve(2); //If suppose this resolve is not there so promise1.then will never be called keep this in mind
  console.log(3); //this will be alos executed right after console.log(1) since this is also synchronous code
});

promise1.then((res) => {
  //and this will be ignored initially as we are calling .then on an promise object so it will be executed later after the complete synchronos code is executed
  console.log("Q2 Promise", res);
});

console.log("Q2 end");

//OP sequence for above question will be  Q2 start, 1, 3, Q2 end, Q2 Promise 2

//Q3 - Whats the output

console.log("Q3 start");
const fn = () => {
  return new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });
};

console.log("middle");

fn().then((res) => {
  console.log("Q3 success", res);
});

console.log("Q3 end");
//OP sequence for above question will be  Q3 start, middle, 1, Q3 end, Q3 success success

//Q4- Whats the output

console.log("Q4 start");
function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

let promise = job();

promise
  .then(function () {
    console.log("Success 1");
  })
  .then(function () {
    console.log("Success 2");
  })
  .catch(function () {
    console.log("Error 1");
  })
  .then(function () {
    console.log("Success 3"); //Always remember after the catch if there is any .then so that will also be executed
  });

console.log("Q4 end");
//OP sequence for above question will be  Error 1 , Success 3

//Q5- Whats the output

console.log("Q5 start");

function job1(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise2 = job1(true);

promise2
  .then(function (data) {
    console.log("Q5", data);
    return job1(false);
  })
  .catch(function (error) {
    console.log("Q5", error);
    return "Error Caught"; //this string will be treated as true in if ellse in JavaScript
  })
  .then(function (data) {
    console.log("Q5", data);
    return job1(true);
  })
  .catch((error) => {
    console.log("Q5", error);
  });
console.log("Q5 end");

// OP sequence for the above question Q5 success
//                                    Q5 error
//                                    Q5 Error Caught

console.log("Q6 start");

function job2(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise3 = job2(true);

promise3
  .then(function (data) {
    console.log("Q6", data);
    return job2(true);
  })
  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat"; //on this line we are throwing an error hence it will go to the next catch available
    }
    return job2(true);
  })
  .then(function (data) {
    console.log("Q6.", data);
  })
  .catch(function (error) {
    console.log("Q6", error);
    return job2(false); //this string will be treated as true in if ellse in JavaScript
  })
  .then(function (data) {
    console.log("Q6", data);
    return job2(true);
  })
  .catch((error) => {
    console.log("Q6", error);
    return "Error Caught";
  })
  .then(function (data) {
    console.log("Q6", data);
    return new Error("test"); //Not returning a promise ////Not returning a promise //On this line we are not throwing an error as we are returning an error object hence it will go to the next then available.
  })
  .then(function (data) {
    console.log("Success:", data.message);
  })
  .catch(function (data) {
    console.log("Error", data.message);
  });

//success success
console.log("Q6 end");

//Q7 Create a first promise which resolves by "First" then create a second promise which gets resolved by the first promise which was created earlier and finally it should return the "First" text

const promise11 = new Promise((resolve, reject) => {
  resolve("First");
});

const promise12 = new Promise((resolve, reject) => {
  resolve(promise11);
});

promise12.then((res) => console.log(res));

//Q8 Need to rewrite a code using async await

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    let json = await response.json();
    return json;
  }
  throw new Error(response.status);
}

// loadJson("https://fakeurl.com/no-such-user.json").catch((err) => {
//   console.log(err);
// });

//Q9 Solve Promise Recursively

function promRecurse(funcPromises) {
  if (funcPromises.length == 0) return;

  currPromise = funcPromises.shift(); //shifts the element by 1
  currPromise.then((res) => console.log(res)).catch((err) => console.log(err));

  promRecurse(funcPromises);
}

promRecurse([importantAction("Recursive promise"), greet("Question Solved")]);

//Q10 - Promise Polyfill Implementation

//A promise looks like below

// let promise111 = new Promise((resolve, reject) => setTimeout(() => resolve(100), 3000));

// // tasks to be completed after promise resolution

// promise111.then((val) => console.log(val)).catch(err => console.log(err));

//Promise Polyfill implement starts

// function PromisePolyFill(executor) {

//   let onResolve;

//   function resolve(val) {
//     onResolve(val);
//   }

//   this.then = function(callback) {
//       onResolve = callback;
//       return this;
//   };

//   this.catch = function(callback) {
//       return this;
//   }

//   executor(resolve);
// }

// // you can test in case of asynchronous operation

// new PromisePolyFill((resolve) => setTimeout(() => resolve(1000), 1000)).then(val => console.log(val));

// Now the above will work if we have a delay but what if we have a synchronous operation and the executor is synchronous

// new PromisePolyFill((resolve) => resolve(1000)).then(val => console.log(val))

// it will give TypeError: onResolve is not a function

//Basically when there is no delay then it quickly calls resolve function but the issue is onResolve doesnt gets register with .then(callback) hence its just a normal variable for now and since we are callong inside resolve function it throws onResolve is not a function

//Example for understanding why we have to return this

// function a(){

//   this.a = (val)=>{
//     console.log(val)
//     return this
//   }
//   this.b = (val)=>{
//     console.log(val)
//   }
// }

// new a().a(12).b(15)

// Output:

// 12
// 15

function PromisePolyFill(executor) {
  let onResolve,
    onReject,
    fulfilled = false,
    rejected = false,
    called = false,
    value;

  function resolve(v) {
    fulfilled = true;
    value = v;

    if (typeof onResolve === "function") {
      // for async
      console.log("inside resolve");
      try {
        onResolve(value);
        called = true;
      } catch (error) {
        console.log(onReject);
        onReject(error);
        called = true;
      }
    }
  }

  function reject(reason) {
    rejected = true;
    value = reason;

    if (typeof onReject === "function") {
      onReject(value);
      called = true;
    }
  }

  this.then = function (callback) {
    console.log("inside then");
    onResolve = callback;

    if (fulfilled && !called) {
      // for sync
      console.log("inside then condition");
      called = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    console.log("inside catch");
    onReject = callback;

    if (rejected && !called) {
      console.log("inside then condition");
      called = true;
      onReject(value);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const promise111 = new PromisePolyFill((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    resolve(2);
  }, 1000);
  console.log(3);
});

promise111
  .then((res) => {
    console.log(res);
    throw "test";
  })
  .catch(() =>
    setTimeout(() => {
      console.log(200);
    }, 1000)
  ); //catch(res => console.log(res + " catch"));

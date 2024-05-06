//Debouncing and Throttling in Javascript

//Question 1 - Create a button UI and add debounce as follows =>
//    => Show 'Button Pressed' <X> Times'  every time button is pressed
//    => Increase "Triggered <Y> Times" count after 800ms of debounce

//Basically debouncing is when user is performing any action it will not do any backend call or any action as soon as user stops the action after a certain interval if user hasnt done any action then the backend call or action will be performed

//In throttling till the time user is performing any action the backend call or action will be done as soon as user stops the aaction the backend call and action will also be stopped refer below lodash implemented debounce and throttling

const btn = document.querySelector(".increment_btn");
const btnPressed = document.querySelector(".increment_pressed");
const trigger = document.querySelector(".increment_count");

let pressed = 0;
let triggered = 0;

const debouncedCount = _.debounce(() => (trigger.innerHTML = ++triggered), 800);
const throttleCount = _.throttle(() => (trigger.innerHTML = ++triggered), 1000);

//Polyfill for Debounce.

const myDebounce = (callback, delay) => {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
};

const debouncedpoly = myDebounce(() => {
  trigger.innerHTML = ++triggered;
}, 800);
// The debouncedpoly function is a closure that has access to its own scope, the outer function’s scope (in this case, myDebounce), and the global scope.

// When you call myDebounce, it creates a timer variable in its own scope and returns a new function. This returned function has access to the timer variable due to JavaScript’s lexical scoping.

// So, every time you click the button, it’s not creating a new timer variable. Instead, it’s referencing the timer variable that was created the first time myDebounce was called. This is why debouncedpoly can “remember” the timer from previous invocations.

// In other words, debouncedpoly is a specific instance of a debounced function that was created by calling myDebounce. It retains access to the timer variable from the myDebounce function’s scope, even after myDebounce has finished executing. This is a fundamental aspect of how closures work in JavaScript.

// If you click the button again after the 800ms delay, the if(timer) condition will be false.

// Here’s why:

// When you click the button, the myDebounce function is invoked, and it sets a timer with setTimeout. The ID of this timer is stored in the timer variable.
// If 800ms pass without another button click, the setTimeout callback executes, and the function you passed to myDebounce is called.
// After the setTimeout callback executes, the timer is cleared internally by JavaScript. However, the timer variable in your code still holds the ID of the timer.
// Now, if you click the button again, the myDebounce function checks if(timer). Since timer still holds the ID of the previous (now cleared) timer, the condition is true, and clearTimeout(timer) is called. But since the timer has already executed and cleared internally, this clearTimeout call doesn’t actually do anything.
// The myDebounce function then sets a new timer with setTimeout, and the ID of this new timer is stored in the timer variable, replacing the ID of the old timer.
// So, to answer your question, after 800ms have passed and you click the button again, the if(timer) condition will be true at first (because timer holds the ID of the old timer), but it will be false after myDebounce is invoked (because timer is reassigned to the ID of the new timer).

const myThrottle = (callback, delay) => {
  let last = 0;

  return (...args) => {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return callback(...args);
  };
};

const throttlepoly = myThrottle(() => (trigger.innerHTML = ++triggered), 1000);

btn.addEventListener("click", () => {
  btnPressed.innerHTML = ++pressed;
  //debouncedCount();
  //throttleCount();
  //debouncedpoly();
  throttlepoly();
  //trigger.innerHTML = ++triggered;
});

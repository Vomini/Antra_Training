// Exercise 1: Basic Closures
// Create a function createGreeting(greeting) that takes a string greeting and returns a function.
// The returned function should take a name as an argument and return a string that
// combines the greeting and the name.

// const sayHello = createGreeting("Hello");
// console.log(sayHello("Alice"));  // Outputs: "Hello Alice"
// const sayHi = createGreeting("Hi");
// console.log(sayHi("Bob"));  // Outputs: "Hi Bob"
export function createGreeting(greeting) {
    return (name) => {
        return `${greeting} ${name} `;
    }
}

// Exercise 2: Counter
// Write a function createCounter() that initializes a counter to 0 and returns an object with two methods:
// increment() which increments the counter and returns the new value,
// and getValue() which returns the current value of the counter.

// let counter = createCounter();
// console.log(counter.getValue());  // Outputs: 0
// console.log(counter.increment());  // Outputs: 1
// console.log(counter.increment());  // Outputs: 2
// console.log(counter.getValue());  // Outputs: 2
export function createCounter() {
    let count = 0;

    return {
        increment: () => ++count,
        getValue: () => count
      };

}

// Exercise 3: Function Store
// Create a function functionStore() that allows you to store and retrieve functions by a key.
// It should return an object with two methods: store(key, fn) which stores the function fn
// under the string key, and run(key, ...args) that runs the function stored under key with
// the provided arguments.

// Example;
// let store = functionStore();
// store.store("add", (a, b) => a + b);
// console.log(store.run("add", 5, 7)); // Outputs: 12
export function functionStore() {
    const store={};
    return {
        store: (name,fn) => {store[name]=fn;},
        run: (name, ...args) => store[name](...args)

    }; 
}

// Exercise 4: Private Variables
// Write a function createPerson(name) that creates private variables and provides methods
// to access and modify them. This function should return an object with methods getName()
// to return the current name, and setName(newName) to set a new name.

// let person = createPerson("Alice");
// console.log(person.getName());  // Outputs: "Alice"
// person.setName("Bob");
// console.log(person.getName());  // Outputs: "Bob"
export function createPerson(name) {
    let initialName = name;
    return {
      getName: () => initialName,
      setName: (newName) => (initialName = newName),
    };
}

// Exercise 5: Limited Call Function
// Description: Write a function createLimitedCallFunction(fn, limit) that
// takes a function fn and a number limit as arguments. This returned function can only be
// called up to limit times. After the limit is reached, every subsequent call to this function
// should be ignored.

// function sayHello() {
//   console.log("Hello!");
// }

// let limitedHello = createLimitedCallFunction(sayHello, 3);
// limitedHello(); // Outputs: "Hello!"
// limitedHello(); // Outputs: "Hello!"
// limitedHello(); // Outputs: "Hello!"
// limitedHello(); // No output, subsequent calls are ignored
let calls=1;
export function createLimitedCallFunction(fn, limit) {  
    return ()=> {
        if(calls <= limit){
            calls++;
            fn();
        }
    };
}

// Exercise 6: Rate Limiter
// Implement a function createRateLimiter(limit, interval) that limits how often a
// given function can be called. The function should return a new function that, when called,
// will invoke the original function only if a certain amount of time (interval in milliseconds)
// has passed since the last invocation. The limit parameter should specify how many times the function
// can be triggered within the given interval.

// function logMessage(message) {
//   console.log(message);
// }

// let limitedLog = createRateLimiter(logMessage, 2, 10000); // Allow 2 calls every 10 seconds
// limitedLog("Hello"); // "Hello" is logged
// limitedLog("World"); // "World" is logged
// limitedLog("Again"); // This call is ignored

export function createRateLimiter(fn, limit, interval) {
    let calls = 0;
    let startTime = Date.now();

    return (...args) => {
        const currentTime = Date.now();

    // Reset the count and start time if the interval has passed
        if (currentTime - startTime >= interval) {
            startTime = currentTime;
            calls = 0;
        }

    // If limit is not reached, call the function
        if (calls < limit) {
            calls++;
            fn(...args);
        }
  };
}



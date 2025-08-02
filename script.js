//Name: Ilili Fikadu

/*Part 1: Understanding Type Coercion
Task: Find the answers for the following operations. Fill in the blanks with the expected output.*/

console.log('5' + 7);       // Answer: '57'
console.log(Boolean(0));    // Answer: false
console.log('10' - '2');    // Answer: 8
console.log('5' == 5);      // Answer: true
console.log('5' === 5);     // Answer: false
console.log(Boolean(''));   // Answer: false
console.log('5' + true);    // Answer: '5true'
console.log('5' * 2);       // Answer: 10
console.log(0 == false);    // Answer: true
console.log(Boolean(NaN));  // Answer: false

//Part 2: Conditional Checks
// 1. Check if a number is positive, negative, or zero
function checkNumber(num) {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}
checkNumber(-3);

// 2. Check if a person is eligible to vote
function canVote(age) {
  if (age >= 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Not eligible to vote");
  }
}
canVote(20);
// 3. Check if a temperature is above, below, or equal to freezing point (0°C).
function checkTemperature(temp) {
  if (temp > 0) {
    console.log("Above freezing point");
  } else if (temp < 0) {
    console.log("Below freezing point");
  } else {
    console.log("At freezing point");
  }
}

checkTemperature(-5)

//Part 3: Loop Exercises
// Task 1: Factorial of a Number
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  console.log(Factorial of ${n} is ${result});
}
factorial(5);

// Task 2: Fibonacci Sequence
function fibonacci(limit) {
  let a = 0, b = 1;
  console.log(a);
  console.log(b);
  for (let i = 2; i < limit; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
  }
}
fibonacci(7);

// Task 3: Find Prime Numbers up to n
function printPrimes(upTo) {
  for (let i = 2; i <= upTo; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(i);
  }
}
printPrimes(20);

//Part 4: Function Tasks
// Task 1: Calculate Average
function average(a, b) {
  if (typeof a !== "number"  typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
  return (a + b) / 2;
}
console.log("Average:", average(6, 4));

// Task 2: Calculate Factorial (Arrow Function)
const factorial = (n) => {
  if (!Number.isInteger(n)  n < 0) {
    throw new Error("Input must be a non-negative integer");
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};
console.log("Factorial (arrow):", factorial(5));

// Task 3: Check Prime Number
const isPrime = function (num) {
  if (!Number.isInteger(num) || num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
console.log("Is 7 prime?", isPrime(7));

//Part 5: Array Operations
let numbers = [3, 7, 1, 12, 5, 9];

// To Print each number
numbers.forEach(num => console.log(num));

// To create a new array with each number squared.
let squared = numbers.map(num => num * num);
console.log("Squared:", squared);

// To create a new array containing only odd numbers.
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers);

// To find the sum of the numbers.
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log("Sum:", sum);

// To get the first number greater than 10.
let firstGreaterThan10 = numbers.find(num => num > 10);
console.log("First > 10:", firstGreaterThan10);

// To get the index of the first even number.
let firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log("First even index:", firstEvenIndex);

// To check if a specific number is present.
console.log("Includes 5?", numbers.includes(5));

// To get a subarray of the first three elements.
let firstThree = numbers.slice(0, 3);
console.log("First three:", firstThree);

// To remove the last number and add a new number.
numbers.splice(numbers.length - 1, 1, 15);
console.log("After splice:", numbers);

// To sort the numbers in ascending order.
let sorted = [...numbers].sort((a, b) => a - b);
console.log("Sorted:", sorted);

// To create a string of all numbers separated by commas.
let joined = numbers.join(",");
console.log("Joined:", joined);

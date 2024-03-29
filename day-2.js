// For loops
// and
// accumulators

// Note: An accumulator is a variable the global scope (at least, not in the local scope) that is changed by the for loop at each iteration.

// let's call our our first accumulator "sum"

let sum = 0;

console.log("**** Example: sum++ ****");
// Example: add 1 to sum 5 times.
console.log(`1. sum before ++ 5 times`);
for(let i=0; i<5; i++) {
  sum++;
}
console.log(`2. sum after ++ 5 times`);

// TODO: reset sum to 0, then add 1 to sum 25 times.
sum = 0;



// TODO: reset sum to 0, then add 1 to sum 50 times.



// TODO: reset sum to 0, then add 1 to sum 1000000 times.

// Example: 
// We can also use the variable i in our for loop to add all the numbers from 1 to 10;
console.log("**** Example: sum+i ****");
sum = 0;
for(let i=0; i<11; i++) {
  sum = sum + i;
}
console.log(`sum of numbers 1-10: ${sum}`);

// TODO: add the numbers from 0 to 25
// TODO: add the numbers from 0 to 50 
// TODO: add the numbers from 0 to 9999999


// Example: we don't have to start at 1! We can add the numbers from 100-200:
sum = 0;
for(let i=100; i<201; i++) {
  sum = sum + i;
}
console.log(`sum of numbers 100-200: ${sum}`);

// TODO: add the numbers from 5 to 10
// TODO: add the numbers from 55 to 65 
// TODO: add the numbers from 999 to 8000000

// Note: we can combine an accumulator and an array.
// Example: what is the total number of characters in all the animals?
console.log("**** Example: add up letters ****")

let animals = ["aardvark", "buffalo", "cat", "dingo"];

let total = 0;
for(let i=0; i<animals.length; i++) {
  let wordLength = animals[i].length;
  total = total + wordLength;
}
console.log(`The total number of letters is: ${total}`);
// Example, you can find the average, too.
let average = total/animals.length;
console.log(`The average length of the word is: ${average}`);

// You can also add up numbers
total = 0;
let prices = [1.01, 10.99, 4.32, 1000.03, 4.00];
// TODO: add up all the prices in the array "prices".



console.log(`The total number of letters is: ${total}`);

// TODO: copy your arrays from day-1.
// find the total characters in each.
// find the average length of each word.

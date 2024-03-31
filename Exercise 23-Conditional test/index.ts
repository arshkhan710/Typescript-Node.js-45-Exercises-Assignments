// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car = 'subaru';

// Test 1: Check if car is equal to 'subaru'
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

// Test 2: Check if car is not equal to 'honda'
console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda'); // True

// Test 3: Check if car is equal to 'Subaru' (case-sensitive comparison)
console.log("Is car == 'Subaru'? I predict False.");
console.log(car == 'Subaru'); // False

// Test 4: Check if car is equal to 'subaru' (case-insensitive comparison)
console.log("Is car == 'subaru' (case-insensitive)? I predict True.");
console.log(car.toLowerCase() == 'subaru'); // True

// Test 5: Check if car is not equal to null
console.log("Is car != null? I predict True.");
console.log(car != null); // True

// Test 6: Check if car is equal to undefined
console.log("Is car == undefined? I predict False.");
console.log(car == undefined); // False

// Test 7: Check if car is not equal to an empty string
console.log("Is car != ''? I predict True.");
console.log(car != ''); // True

// Test 8: Check if car is equal to a number
console.log("Is car == 123? I predict False.");
//console.log(car == 123); // False

// Test 9: Check if car starts with 'sub'
console.log("Does car start with 'sub'? I predict True.");
console.log(car.startsWith('sub')); // True

// Test 10: Check if car ends with 'aru'
console.log("Does car end with 'aru'? I predict True.");
console.log(car.endsWith('aru')); // True

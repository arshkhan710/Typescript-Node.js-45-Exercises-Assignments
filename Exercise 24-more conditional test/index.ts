

// Tests for equality and inequality with strings
let fruit1: string = "apple";
let fruit2: string = "banana";

console.log("Equality test with strings:");
console.log(fruit1 == "apple"); // True
console.log(fruit2 == "orange"); // False

console.log("Inequality test with strings:");
console.log(fruit1 != "orange"); // True
console.log(fruit2 != "banana"); // False

// Tests using the lower case function
let name1: string = "John";
let lowerName: string = name1.toLowerCase();

console.log("Lower case function test:");
console.log(lowerName == "john"); // True
console.log(lowerName == "JOhn"); // False

// Numerical tests
let num1: number = 10;
let num2: number = 20;

console.log("Numerical tests:");
console.log(num1 > num2); // False
console.log(num1 < num2); // True
console.log(num1 >= num2); // False
console.log(num1 <= num2); // True

// Tests using "and" and "or" operators
let x: number = 5;
let y: number = 10;

console.log("Tests using 'and' and 'or' operators:");
console.log(x > 3 && y > 5); // True
console.log(x > 3 && y < 5); // False
console.log(x > 3 || y < 5); // True
console.log(x < 3 || y < 5); // False

// Test whether an item is in an array
let fruits: string[] = ["apple", "banana", "orange", "grape"];

console.log("Test whether an item is in an array:");
console.log(fruits.includes("banana")); // True
console.log(fruits.includes("mango")); // False

// Test whether an item is not in an array
console.log("Test whether an item is not in an array:");
console.log(!fruits.includes("mango")); // True
console.log(!fruits.includes("orange")); // False

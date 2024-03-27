"use strict";
//Task no 3
//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
//Step 01
let personName = "arsh khan";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()));
console.log(personName.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()));
//Note Ecxerciese number # 3 
/*Certainly! Let's break down the expression `personName.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());` step by step:

1. **`personName.toLowerCase()`:**
- `personName`: This is the variable holding the person's name.
- `.toLowerCase()`: This method converts all characters in the string to lowercase. This is done to ensure consistency, as we're going to capitalize the first letter of each word later.

2. **`.replace(/\b\w/g, (char) => char.toUpperCase())`:**
- `.replace()`: This method is used to replace text in a string with new text.
- `/\b\w/g`: This is a regular expression pattern that matches the beginning of a word (`\b`), followed by a word character (`\w`). The `g` flag ensures that the replacement is applied globally (i.e., for all matches in the string).
- `(char) => char.toUpperCase()`: This is an arrow function used as the replacement value. It takes each matched character (`char`) and converts it to uppercase using the `toUpperCase()` method.

Putting it all together:

- We start with the `personName` string.
- We convert it to lowercase to ensure consistency.
- We then use `.replace()` with a regular expression to find each word boundary (`\b`) followed by a word character (`\w`), effectively identifying the first letter of each word.
- For each matched character, we use an arrow function to convert it to uppercase.
- The result is a string where the first letter of each word is capitalized, achieving title case.
*/
//Step 02
// let personName:string =("Arsh khan"); //Made Person Name Variable "arsh khan"
// let Message:string = ("my name is arsh khan");
// console.log (personName.toLowerCase()); // lower Case  = arsh khan
// console.log(personName.toUpperCase()); //Upper Case = ARSH KHAN
// console.log(personName.split("").map(word=> word.charAt(0).toUpperCase()+word.slice (1).toLowerCase()).join("") , Message.split("").map(word=> word.charAt(0).toLowerCase()+word.slice (1).toUpperCase()).join("")); //Title Case = Arsh Khan
//Step 03
//learning from youtube
// let PersonName:string = " ";
// PersonName = prompt("What is your name?") || " ";
// let lowercase:string = PersonName.toLowerCase();
// let uppercase:string = PersonName.toUpperCase();
// let titlecase:string = PersonName.split(' ').map(word=> word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
// if(PersonName !== null && PersonName !== ''){
//     alert(`Hello ${PersonName}, Here are your name in:
//     lowercase: ${lowercase}
//     UPPERCASE: ${uppercase}
//     Title Case: ${titlecase}`)
// }
// else
// {alert("Please fill your name !")}
// create html file
//did not understand this process

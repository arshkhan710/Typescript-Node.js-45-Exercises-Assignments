// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.

import { log } from "console";
import { off } from "process";

// Create an array to store fruits
let fruits: string[] = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

// Print the array
console.log("List of Fruits:");
console.log(fruits);

//put value in empty array
let countries:string [] = []

countries.push ("Pakistan")
countries.push ("india")
countries.push ("bangladesh")

console.log("list of countries");
//list of countries
for (let i=0; i<countries.length; i++){
    console.log(countries [i])
 
   console.log("list of Fruits");
    
}
//list of fruits
for (let i=0; i<fruits.length; i++){console.log(fruits[i]);
}
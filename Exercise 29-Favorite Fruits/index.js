"use strict";
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
let FavoriteFruits = ["Mango", "Grapes", "Banana"];
if (FavoriteFruits.includes("Banana")) {
    console.log("You Really Like Bananas!");
}
if (FavoriteFruits.includes("Mango")) {
    console.log("You Really Like Mangoes!");
}
if (FavoriteFruits.includes("Grapes")) {
    console.log("You Really Like Grapes!");
}
if (FavoriteFruits.includes("Dates")) {
    console.log("You Really Like Dates");
}
else
    (console.log("This is not Your Favorite Fruit"));

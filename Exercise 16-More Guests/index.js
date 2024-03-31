"use strict";
// Start with the updated guest list from Exercise 15
let guests = ["Atiq", "Aadil", "Azhar"];
// Print invitation messages to each person on the list
for (let guest of guests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}
// Inform people about the bigger dinner table
console.log("\nGood news! We found a bigger dinner table.");
// Add one new guest to the beginning of the array
let newGuestBeginning = "Owais";
guests.unshift(newGuestBeginning);
// Add one new guest to the middle of the array
let newGuestMiddle = "Sameer";
let middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, newGuestMiddle);
// Use append() to add one new guest to the end of the list
let newGuestEnd = "Hussain";
guests.push(newGuestEnd);
// Print a new set of invitation messages
for (let guest of guests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

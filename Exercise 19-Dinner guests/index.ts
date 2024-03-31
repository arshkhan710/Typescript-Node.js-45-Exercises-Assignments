// Start with the updated guest list from Exercise 16
let guests: string[] = ["Atiq", "Aadil", "Athar", "Sameer", "Owais", "Husaain"];

// Print invitation messages to each person on the list
console.log("New Guest List:");
for (let guest of guests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

// Inform people about the number of people being invited to dinner
console.log(`\nYou are inviting ${guests.length} people to dinner.`);

// Inform people about the limited space for only two guests
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print a message to each of the two people still on your list
console.log("\nInvitation Messages for the Two Remaining Guests:");
for (let guest of guests) {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
}

// Remove the last two names from your list to have an empty list
guests.pop();
guests.pop();

// Print the list to make sure it's empty
console.log("\nRemaining Guests after Removing:");
console.log(guests);

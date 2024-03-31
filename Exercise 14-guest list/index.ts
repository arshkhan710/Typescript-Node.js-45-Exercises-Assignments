// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

//# Create a list of guests
// Exercise 14: Guest List

// Create a list of guests
let guests: string[] = ["Atiq", "Aadil", "Azhar"];

// Print invitation messages to each person on the list
for (let guest of guests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}
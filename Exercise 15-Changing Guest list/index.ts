// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.

// Exercise 15: Changing Guest List

// Start with the original guest list
let guests: string[] = ["Atiq", "Aadil", "Azhar"];

// Print invitation messages to each person on the list
console.log("Original Guest List:");
for (let guest of guests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

// Specify the guest who can't make it
let guestCantMakeIt: string = "Azhar";

// Print the name of the guest who can't make it
console.log(`\nUnfortunately, ${guestCantMakeIt} can't make it to the dinner.`);

// Replace the guest who can't make it with a new person
let newGuest: string = "Azhar";
guests[guests.indexOf(guestCantMakeIt)] = newGuest;

// Print a second set of invitation messages
console.log("\nUpdated Guest List:");
for (let guest of guests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}
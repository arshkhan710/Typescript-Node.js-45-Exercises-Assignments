// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Define an array of magician's names
const originalMagicianNames: string[] = ['Merlin', 'Harry Houdini', 'David Copperfield', 'Penn & Teller'];

// Create a copy of the original array
const copiedMagicianNames: string[] = [...originalMagicianNames];

// Call makeGreat function with the copied array to modify the array of magicians
const greatMagicianNames: string[] = makeGreat(copiedMagicianNames);

// Call the showMagicians function with each array to show the original names and the modified names
console.log("Original Magicians:");
showMagicians(originalMagicianNames);

console.log("\nModified Magicians:");
showMagicians(greatMagicianNames);

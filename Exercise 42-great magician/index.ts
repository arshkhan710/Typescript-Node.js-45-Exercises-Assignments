// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Define an array of magician's names
let magicianNames: string[] = ['Merlin', 'Harry Houdini', 'David Copperfield', 'Penn & Teller'];

// Call makeGreat function to modify the array of magicians
magicianNames = makeGreat(magicianNames);

// Call the showMagicians function to see the modified list
showMagicians(magicianNames);

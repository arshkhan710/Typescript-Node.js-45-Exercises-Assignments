// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function makeGreat(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Define an array of magician's names
var magicianNames = ['Merlin', 'Harry Houdini', 'David Copperfield', 'Penn & Teller'];
// Call makeGreat function to modify the array of magicians
magicianNames = makeGreat(magicianNames);
// Call the showMagicians function to see the modified list
showMagicians(magicianNames);

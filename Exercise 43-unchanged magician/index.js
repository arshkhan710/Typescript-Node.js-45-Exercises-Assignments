// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function makeGreat(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Define an array of magician's names
var originalMagicianNames = ['Merlin', 'Harry Houdini', 'David Copperfield', 'Penn & Teller'];
// Create a copy of the original array
var copiedMagicianNames = __spreadArray([], originalMagicianNames, true);
// Call makeGreat function with the copied array to modify the array of magicians
var greatMagicianNames = makeGreat(copiedMagicianNames);
// Call the showMagicians function with each array to show the original names and the modified names
console.log("Original Magicians:");
showMagicians(originalMagicianNames);
console.log("\nModified Magicians:");
showMagicians(greatMagicianNames);

// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Define an array of magician's names
var magicianNames = ['Merlin', 'Harry Houdini', 'David Copperfield', 'Penn & Teller'];
// Call the showMagicians function with the array of magician names
showMagicians(magicianNames);

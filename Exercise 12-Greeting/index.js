//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
var friendsName = (["Arsh khan", "Aadil", "Atique", "Azhar"]);
var message = ("Assalam o Alaikum");
//foreach
friendsName.forEach(function (names) {
    console.log("".concat(message, " ").concat(names, " Bhai"));
});
//for loop
for (var i = (0); i < friendsName.length; i++) {
    console.log("".concat(friendsName[i], " ").concat(message, " Bhaii"));
}

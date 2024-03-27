//13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var vehList = (["Car", "Super Bike", "Super Car", "Pick Up Truck"]);
//For each
vehList.forEach(function (transport) {
    var message = ("\u201CI would like to own a ".concat(transport, "\u201D"));
    console.log(message);
});
//For loop
var message = ("\u201CI would like to own a");
for (var i = 0; i < vehList.length; i++) {
    console.log("".concat(message, " ").concat(vehList[i]));
}

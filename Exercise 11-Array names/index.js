// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var friendsNames = (["Arsh khan", "Muhammad Atique", "Muhammad Aadil", "Azhar Khan"]);
//FOR LOOP
// for (let i = 0; i < friendsNames.length; i++) {
//     console.log(friendsNames[i]);
//     }
friendsNames.forEach(function (names) { console.log(names); });

//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.

let friendsName:string [] = (["Arsh khan" , "Aadil" , "Atique" , "Azhar"]);
let message:string =("Assalam o Alaikum");

//foreach
friendsName.forEach(names => {
    console.log(`${message} ${names} Bhai`);
});

//for loop
for(let i=(0); i<friendsName.length; i++){
    console.log(`${friendsName[i]} ${message} Bhaii`);
}
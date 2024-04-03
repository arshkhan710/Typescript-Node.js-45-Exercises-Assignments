"use strict";
// List of current usernames
const current_users = ['Atiq', 'Aadil', 'Azhar', 'Athar', 'Hussain'];
// List of new usernames
const new_users = ['Owais', 'Sameer', 'Arsh', 'AtiQ', 'Ali'];
// Loop through new_users list and check availability of each username
new_users.forEach(newUser => {
    const isTaken = current_users.some(currentUsername => currentUsername.toLowerCase() === newUser.toLowerCase());
    if (isTaken) {
        console.log(`The username "${newUser}" is already taken. Please choose a different username.`);
    }
    else {
        console.log(`The username "${newUser}" is available.`);
    }
});

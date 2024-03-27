// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let personName = ("Arsh khan");
let personNameWithSpace =(`\t \n Arsh khan \t \n`) 
let personNameWithoutSpace = (`\t \n Arsh khan \t \n`.trim())

console.log(`\t ${personName} , ${personName}`) // \t =Blank space
console.log(`\t ${personName} ,\n ${personName}`) // \n = New Line
console.log(`\t \n${personName} \t \n `);
console.log(personNameWithSpace);
console.log(personNameWithoutSpace);

 
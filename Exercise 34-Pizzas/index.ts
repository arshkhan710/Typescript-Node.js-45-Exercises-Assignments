// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.

// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.

// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!

// Store pizza names in an array
const pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// Loop through the array to print each pizza name
console.log("My favorite pizzas are:");
for (let i = 0; i < pizzas.length; i++) {
    // Print a simple statement using the name of the pizza
    console.log(`I like ${pizzas[i]} pizza.`);
}

// Additional sentence expressing love for pizza
console.log("Pizza is one of the best foods ever! I really love pizza!");

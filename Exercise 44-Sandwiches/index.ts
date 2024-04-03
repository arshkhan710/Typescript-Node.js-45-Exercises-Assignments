// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.

function makeSandwich(items: string[]): void {
    console.log("Sandwich summary:");
    console.log("Bread");
    items.forEach(item => {
        console.log(item);
    });
    console.log("Bread");
    console.log("Enjoy your sandwich!");
}

// Call the function three times with a different number of arguments each time
makeSandwich(['Cheese', 'Tomato', 'Lettuce']);
makeSandwich(['Ham', 'Mustard']);
makeSandwich(['Turkey', 'Bacon', 'Avocado', 'Swiss cheese']);

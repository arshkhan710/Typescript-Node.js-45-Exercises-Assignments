"use strict";
// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
function storeCarInfo(manufacturer, model, ...extras) {
    const carInfo = {
        manufacturer: manufacturer,
        model: model
    };
    // Add any additional key-value pairs provided as arguments
    extras.forEach(extra => {
        Object.assign(carInfo, extra);
    });
    return carInfo;
}
// Call the function with required information and additional name-value pairs
const carInfo = storeCarInfo('Toyota', 'Corolla', { color: 'red' }, { year: 2022 });
// Print the object that's returned to ensure all information was stored correctly
console.log(carInfo);

// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
function cityCountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with three city-country pairs
var city1 = cityCountry('Lahore', 'Pakistan');
var city2 = cityCountry('Paris', 'France');
var city3 = cityCountry('Tokyo', 'Japan');
// Print the values returned
console.log(city1);
console.log(city2);
console.log(city3);

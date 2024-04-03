// 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
function describeCity(city, country) {
    if (country === void 0) { country = 'default country'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describeCity('Karachi', 'Pakistan');
describeCity('New York', 'USA');
describeCity('London'); // This will use the default country value

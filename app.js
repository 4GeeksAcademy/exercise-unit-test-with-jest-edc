// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // return the dollar value
    return valueInDollar;
};

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b;
};

// Just a console log for ourselves
console.log(sum(7,3));

// Function to convert dollars to yen
function fromDollarToYen(dollar) {
    const yen = dollar * (oneEuroIs.JPY / oneEuroIs.USD);
    return yen;
}

// Function to convert yen to pounds
function fromYenToPound(yen) {
    const pound = yen * (oneEuroIs.GBP / oneEuroIs.JPY);
    return pound;
}

// Export the functions
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs };
// app.test.js

const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    const total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be equivalent amount in dollars", function() {
    const dollars = fromEuroToDollar(1);
    const expected = 1 * 1.07;
    expect(dollars).toBe(expected);
});

test("One dollar should be equivalent amount in yen", function() {
    const yen = fromDollarToYen(1);
    const expected = 1 * (156.5 / 1.07);
    expect(yen).toBe(expected);
});

test("One yen should be equivalent amount in pounds", function() {
    const pounds = fromYenToPound(1);
    const expected = 1 * (0.87 / 156.5);
    expect(pounds).toBe(expected);
});
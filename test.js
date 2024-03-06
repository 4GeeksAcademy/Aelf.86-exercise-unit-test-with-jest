// // Import the function sum from the app.js file
const { fromEuroToDollar,fromDollarToYen,fromYenToPound  } = require('./app.js');


test("One euro should be 1.07 dollars", function() {
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 156.5 yens", function() {
     expect(fromDollarToYen(3.5)).toBe(547.75); // 1 dollar is 156.5 dollars, then 3.5 dollars should be = (3.5 * 156.5)
})

test("One yen should be 0.87 pounds", function() {
     expect(fromYenToPound(3.5)).toBe(3.045); // 1 dollar is 156.5 dollars, then 3.5 dollars should be = (3.5 * 156.5)
})
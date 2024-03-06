let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs["USD"];
}
const fromDollarToYen = (dollars) => {
    return dollars * oneEuroIs["JPY"];
}
const fromYenToPound = (yen) => {
    return yen * oneEuroIs["GBP"];
}
module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound};


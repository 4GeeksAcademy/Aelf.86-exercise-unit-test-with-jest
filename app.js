// const sum = (a,b) => {
//     return a + b
// }

// console.log(sum(7,3))



let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87, 

}
const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs["USD"];
}
const fromDollarToYen = (dollars) => {
    return dollar * oneDollarIs["YEN"];
}
module.exports = {fromEuroToDollar,fromDollarToYen};
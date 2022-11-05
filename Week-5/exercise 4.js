const mathOperations = {
    sum: function(a,b) {
        return a + b;
    },
    diff: function(a,b) {
        return a - b;
    },
    product: function(a,b) {
        return a * b
    }}

module.exports = mathOperations
const okk=mathOperations.sum(2,5);
console.log(okk);
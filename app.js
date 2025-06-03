require("./xyz.js")

const {calculateMultiple } = require("./caluclate/multiple.js")

const {x, calculateSum } = require("./caluclate/sum.js")

const data = require("./data.json");

console.log(data);

var a = 10;

var b = 20;

calculateSum(a, b);

calculateMultiple(a, b)


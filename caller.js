const myMethod = require("./utils");
const names = require("./names");

// myMethod(names.dagim);
// myMethod(names.peter);
console.log(names);
myMethod(names.dagim);
myMethod(names.peter);
console.log(names.hello);

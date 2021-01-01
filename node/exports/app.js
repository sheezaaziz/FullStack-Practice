const helper = require('./helper.js');
console.log(helper.PI);

// we can destructure the obj
const { PI } = require('./helper.js');
console.log(PI, helper.square(3));

// note we can just type 'exports' instead of 'module.exports' so long as we do not overwrite 'exports' to a diff var.

const PI = 3.14;
const square = x => x * x;

// option 1
// const helper = {
//   PI: PI,
//   square: square
// };
// module.exports = helper;

// option 2
// module.exports.PI = PI;
// module.exports.square = square;

// option 3
module.exports.PI = 3.14;
module.exports.square = x => x * x;

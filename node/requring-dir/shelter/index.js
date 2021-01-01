const cat1 = require('./cat1');
const cat2 = require('./cat2');
const cat3 = require('./cat3');

const allCats = [cat1, cat2, cat3];

module.exports = allCats; // this will be exported whenever the directory is exported bc this file is the directory's 'index' file.

const fs = require('fs');
const path = require('path');

let jsonFile = fs.readFileSync(path.resolve(__dirname, 'symbolNameData.json'));
let jsonData = JSON.parse(jsonFile);
console(jsonData);
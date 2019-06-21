var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('large_data.txt', { start: 0, end: 500});

// write it into another file 
var writeStream = fs.createWriteStream('output.txt');

readerStream.pipe(writeStream);


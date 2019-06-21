var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('large_data.txt', { start: 200, end: 1400});

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

readerStream.on("data", (chunk) => {
  console.log(chunk);
  data+= chunk;
});

readerStream.on("end", () => {
  console.log("===================OPERATION ENDED =================");
  console.log(data);
});

readerStream.on("error", (err) => {
  console.log(err);
});

console.log("Program Ended");
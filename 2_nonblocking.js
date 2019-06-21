//reading file without blocking -- non blocking I/O 
var fs = require("fs");

//it takes sometime to read the file entirely.
//JS Engine will work on other lines of code here before the file is completely read.
//After read, JS Engine will come back to the callback and execute it. 
//This is Async operation
fs.readFile( './sample.txt', (err, data ) =>  {
  if(err){
    console.log(err);
  }else{
    console.log(data.toString());
  }
});


//the following will be printed first, and then the file content from line num 8
//This is non-blocking I/O
console.log("Last line");
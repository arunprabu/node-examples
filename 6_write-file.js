var fs = require("fs");
var events = require("events");

var eventEmitter = new events.EventEmitter();
var txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';

//read the file upon the emitted event -- generic event listener
eventEmitter.on("FILE_WRITING_COMPLETE", () => {
  console.log("Pls wait while we read the file...");
  fs.readFile( './example.txt', (err, data ) =>  {
    if(err){
      console.log(err);
    }else{
      console.log(data.toString());
    }
  });
});

fs.writeFile('example.txt', txt, (err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("File writing successful. Check the file in the same directory");
    //Todo: 
    //emit custom event -- FILE_WRITING_COMPLETE
    eventEmitter.emit("FILE_WRITING_COMPLETE");
  }
});

console.log("LAst Line");
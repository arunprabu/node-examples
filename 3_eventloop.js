var events = require('events'); // Import events module
var data = "test";

var eventEmitter = new events.EventEmitter();

eventEmitter.on("LOG_PRINTED", () => {
  console.log("Inside LOG_PRINTED");
});

//event listener 
eventEmitter.on("CONNECTION_ESTABLISHED", ( data ) => {
  console.log("Inside CONNECTION_ESTABLISHED");
  console.log(data);
  eventEmitter.emit("LOG_PRINTED");
});

//emitting event
eventEmitter.emit("CONNECTION_ESTABLISHED", data);



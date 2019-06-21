var http = require("http"); //importing http module from nodejz

var homePage =  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div>
    <h1>Home Page</h1>
  </div>
</body>
</html>`;

var aboutPage = `<div>
<h1>About Page</h1>
</div>`;

var anyPage = `{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}`;

//creating a server
http.createServer( ( req, res ) => {
  console.log("Server created");
  //printed twice as one more req received to load favicon from chrome family browsers
  //firefox sends req to load favicon for the first time only. but chrome in each loading.
  
  //algo:
  //1. understand the url --> req.url
  //2. understanding the http method 
  //3. construct the right template and send

  console.log(req.url); // request url

  //Todo: playaround with req.method and send the resp accordingly. 
  //Refer: https://github.com/arunprabu/Node-js/blob/master/12_http.js

  switch(req.url){
    case '/':
      res.writeHead(200, {"Content-Type": "text/html"}); //constructing response header
      res.write(homePage); // send res with html template
      res.end();
      break;
    case '/about': 
      res.writeHead(200, {"Content-Type": "text/html"}); 
      res.end(aboutPage);
      break;
    default:
      res.writeHead(200, {"Content-Type": "text/json"});
      res.end(anyPage);
  }

 //sending the response
  //localhost:3000 is the url you have load from browser
  //even urls such as localhost:3000/any will be sent a response. 

}).listen( 3000 ); //making the server to run on port number 3000



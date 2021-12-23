const express = require('express');

const port = 8000;
// connecting to database
const db = require('./config/mongoose');

//creating a server
const app = express();
//accessing middleware for data reading through browser request
app.use(express.urlencoded())
//all the browser requests will be sent to a directory of routes which will handle all routes. Its like a dictionary of routes
//So requiring the routes index file over here

app.use('/',require('./routes/index'));

//accessing static files
app.use(express.static('assests'));

//setting the view engine to be ejs
app.set("view engine","ejs");
app.set("views","./views");

//checking whether the server is running or not
app.listen(port,function(error){
     if(error){
         console.log("Error in running the server!!");
         console.log("Error message: ",error);
         return;
     }
     console.log("Server up and running on port : ",port);
});
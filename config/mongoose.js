// requiring mongoose which will interact with database
const mongoose = require('mongoose');

// setting connection of mongoose with mongodb
mongoose.connect("mongodb://localhost/todo_app_db");

// acquing the connection to check if its successfull or not
const db = mongoose.connection;
//to check error
db.on('error',function(error){
    console.log("Error in setting connection with the database");
    console.log("Error message: ",error);
    return;
})

//if no error than print this message , we are printing messages just to check whether our connection with database was succesfull or not
db.once('open',function(){
    console.log("Database online");
})


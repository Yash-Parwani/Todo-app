const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    description:{
        type : "string",
        required : "true"
    },
     taskcategory :{
        type : "string" ,
        required :" true"
    },
     duedate :{
         type : "string",
         require : "true"
     },
     status : {
         type : "boolean"
     }
},{timestamps : true});


const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
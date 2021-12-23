//dummy data
// var taskList= [
//     {
//         description : "Task 1",
//         taskCategory : "Personal",
//         Duedate : "15-12-2021"
    
//     },
//     {
//         description : "Task 2",
//         taskCategory : "Work",
//         Duedate :"16-12-2021"
    
//     }
//     ];
const Task = require('../models/taskschema');
module.exports.home = function(request,response){
  Task.find({},function(error,tasks){
      if(error){
          console.log("Error in fetching tasks from database");
          console.log("Error message : ",error);
          return;
      }

    Task.find({status : false},function(error,ftasks){
        if(error){
            console.log("Error in fetching tasks with status false from database");
            console.log("Error message : ",error);
            return;
        }
        return response.render("todoView",{
            task_list : tasks,
            ftask_list : ftasks
      });
    });
      
  });
   

};

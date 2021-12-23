// require the task schema
const Task = require('../models/taskschema');


// creating controller action for create request
module.exports.taskCreate = function (request,response){
    Task.create({
        description : request.body.description,
                  taskcategory : request.body.taskcategory,
                    duedate : request.body.duedate,
                    status : false,
    },function (error,tasks){
       if(error){
           console.log("Error in creating task");
           console.log("Error message : ",error);
           return;
       }
       return response.redirect('back');
    }
        
    );

}   



//creating controller action for complete request
module.exports.complete = function (request, response) {

    let id = request.body.check;
    if (Array.isArray(id)) {
        id.forEach(element =>
            Task.findByIdAndUpdate(element, { status: true }, { new: true }, function (error, tasks) {
                if (error) {
                    console.log("Error in updating the contact ");
                    console.log("Error message : ", error);

                    return;
                }
            }));
        return response.redirect('back');
    }
    else {
        Task.findByIdAndUpdate(id, { status: true }, { new: true }, function (error, tasks) {
            if (error) {
                console.log("Error in updating the contact ");
                console.log("Error message : ", error);

                return;
            }

            return response.redirect('back');
        });

    }

}


//create action for controller that will handle delete request
module.exports.taskDelete = function (request, response) {
    let id = request.body.check;


    if (Array.isArray(id)) {
        id.forEach(element => Task.findByIdAndDelete(element,
            function (error) {
                if (error) {
                    console.log("Error in deleting the contact");
                    console.log("Error message is : ", error);
                    return;

                }
                
            }));
            return response.redirect('back');
    }
    else {
        Task.findByIdAndDelete(id,function(error){
            if(error){
                console.log("Error in deleting the contact");
                console.log("Error message is : ",error);
                return;
   
            }
            return response.redirect('back');
       });

    }
}





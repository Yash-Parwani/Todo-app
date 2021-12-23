//its the dictionary of all the routes , all browser requests will be handled by this routes index file
const express = require('express');

//Creating a router
const router = express.Router();
//requiring homecontroller
const homeController = require('../controller/home_controller');


//router that will handle all requests related to home with the help of homeController
router.get('/',homeController.home,);

//router that will handle post requests made to create and delete a task
 router.use('/task',require('./task'));
 
//now this router must be accessible from outside as well , hence exporting it as a module
module.exports = router
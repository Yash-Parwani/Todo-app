const express = require('express');



const router = express.Router();
//requiring creat_task controller



//requiring task controller
const taskController = require('../controller/task_controller');
// router that will handle create request
router.post('/create', taskController.taskCreate);
// router that will handle complete request
router.post('/complete',taskController.complete);
// router that will handle delete request
router.post('/delete',taskController.taskDelete);




module.exports = router;
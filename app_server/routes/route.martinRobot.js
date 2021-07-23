var express = require('express');
var router = express.Router();
var martinRobot = require('../controllers/controller.martinRobot.js');

router.get('/',(req,res)=>
{
    res.json({
        message: "Welcome to Martin Robot Route"
    })
})

// Process Martin Robot Input
router.post('/run',function (req, res) {
    var martinRobotForm = req.body;
    console.log(martinRobotForm)

    martinRobot.addResult(martinRobotForm  ,function (err, result) {
        if (err) {
            console.log(err);
            return res.json({
                message: "Error in Connecting to DB",
                status: false
            });
        }
        else{
            return res.json({
                message: "Result Saved Successfully",
                status: true, 
                data: result
            });
        }

    });

});

// Get All Martin Robot Results
router.get('/get_all', function (req, res) {
    martinRobot.getAllResults(function (err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error in Connecting to DB",
                status: false, 
                data: []
            });
        }
        else if(result.length>0){
            return res.json({
                message: "Martin Robot Result List",
                status: true,
                data: result
            });
        }
        else{
            return res.json({ 
                message: "Martin Robot Result Does Not Exist",
                status: false, 
                data: result
            });
        }
        
    });

});  


module.exports = router;

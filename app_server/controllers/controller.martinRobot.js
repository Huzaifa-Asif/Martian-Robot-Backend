var martinRobot =require('../models/model.martinRobot.js');

// Add martinRobot Result
module.exports.addResult = async (martinRobotform, callback) => {
    martinRobot.create(martinRobotform, callback);
}

// Get All martinRobot Results 
module.exports.getAllResults = (callback) => {
	martinRobot.find(callback);
}




var martinRobotModel =require('../models/model.martinRobot.js');

// Add martinRobot Result
module.exports.addResult = async (martinRobotform, callback) => {
    martinRobotModel.create(martinRobotform, callback);
}

// Get All martinRobot Results 
module.exports.getAllResults = (callback) => {
	martinRobotModel.find(callback);
}




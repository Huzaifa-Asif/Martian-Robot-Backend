const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const schema = mongoose.Schema;

// Martin Robot Schema
const martianRobotSchema = new schema({
    input: {
        type: String // user input | robot instructions
    },
    result: {
        type: String // output the robot final position after processing the input
    },
    created_at: {
        type: Date, default: Date.now
    },

})

const martianRobot = module.exports = mongoose.model('martianRobot', martianRobotSchema);
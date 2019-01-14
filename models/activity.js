// var survey = require("../public/assets/js/survey.js");


module.exports = function(sequelize, DataTypes){
    var Activity = sequelize.define("Activity", {
        activity_name: DataTypes.STRING,
        activity_img:  DataTypes.STRING,
        description: DataTypes.STRING,
        category: DataTypes.STRING,
        needed: DataTypes.STRING,
        instructions: DataTypes.STRING,
        reps: DataTypes.INTEGER,
        sets: DataTypes.INTEGER,
        total_time: DataTypes.STRING,
        below65: DataTypes.BOOLEAN,
        starred: {type: DataTypes.BOOLEAN, defaultValue: false}

    },{timestamps: false})
return Activity; 
}
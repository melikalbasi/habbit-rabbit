// var survey = require("../public/assets/js/survey.js");


module.exports = function(sequelize, DataTypes){
    var Activity = sequelize.define("Activity", {
        activity_img:  DataTypes.STRING,
        activity_name: DataTypes.STRING,
        description: DataTypes.STRING,
        starred: {type: DataTypes.BOOLEAN, defaultValue: false}

    })
return Activity; 
}
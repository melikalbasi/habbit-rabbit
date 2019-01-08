// var survey = require("../public/assets/js/survey.js");

module.exports = function(sequelize, DataTypes){
    var Recipe = sequelize.define("Recipe", {
        recipe_img:  DataTypes.STRING,
        recipe_name: DataTypes.STRING,
        description: DataTypes.STRING,
        ingredients: DataTypes.STRING,
        dietary_tags: DataTypes.STRING,
        starred: {type: DataTypes.BOOLEAN, defaultValue: false}

    })
return Recipe; 
}
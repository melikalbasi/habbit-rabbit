module.exports = function(sequelize, DataTypes){
    var Recipe = sequelize.define("Recipe", {
        recipe_name: DataTypes.STRING,
        recipe_img:  DataTypes.STRING,
        category: DataTypes.STRING,
        description: DataTypes.STRING,
        ingredients: DataTypes.STRING,
        instructions: DataTypes.STRING,
        starred: {type: DataTypes.BOOLEAN, defaultValue: false}

    },{timestamps: false})
return Recipe; 
}
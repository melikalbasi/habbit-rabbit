module.exports = function(sequelize, DataTypes){
    var FavoriteRecipes = sequelize.define("FavoriteRecipes", {
        userID: DataTypes.STRING,
        recipe_name: DataTypes.STRING,
        recipe_img:  DataTypes.STRING,
        category: DataTypes.STRING,
        description: DataTypes.STRING,
        ingredients: DataTypes.STRING,
        instructions: DataTypes.STRING,

     },{timestamps: false})
return FavoriteRecipes; 
} 
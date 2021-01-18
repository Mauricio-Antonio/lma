const { Model, DataTypes } = require('sequelize');

class Comment extends Model{
    static init(sequelize){
        super.init({
            opinion: DataTypes.STRING,
        },{
            sequelize
        })
    }

}

module.exports = Comment;
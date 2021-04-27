const sequelize = require('../db');

const { Model, DataTypes } = require('sequelize');

class List extends Model { }

// Model's class gives us our table's structure (static method init us used here)
List.init({
    name: DataTypes.TEXT,
    position: DataTypes.INTEGER
}, {
    sequelize,
    tableName: 'list'
});

module.exports = List;
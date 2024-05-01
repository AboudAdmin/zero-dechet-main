const { Sequelize, DataTypes } = require("sequelize");

const db = require('./index.js');
const sequelize = db.sequelize;

const Categorie = sequelize.define('categorie',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    nom:{
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Categorie;
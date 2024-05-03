const { Sequelize, DataTypes } = require("sequelize");


const db = require('./index.js');
const sequelize = db.sequelize;


const Commentaire = sequelize.define('commentaire',{
    
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    
    contenu:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    
    produitId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = Commentaire;

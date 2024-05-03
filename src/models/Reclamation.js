const { Sequelize, DataTypes } = require("sequelize");
const db = require('./index.js');
const sequelize = db.sequelize;
const Reclamation = sequelize.define('reclamation',{
    
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
    
    }
);

module.exports = Reclamation;

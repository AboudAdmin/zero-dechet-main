const { Sequelize, DataTypes } = require("sequelize");

const db = require('./index.js');
const sequelize = db.sequelize;

const Produit = sequelize.define('produit',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    nom:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    prix:{
        type: DataTypes.FLOAT,
        validate:{
            min:0
        }
    },
    marque:{
        type: DataTypes.STRING,
    },
    quantite:{
        type: DataTypes.INTEGER,
        validate:{
            min:0
        }
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: true,
    },
    condition:{
        type: DataTypes.ENUM(['Nouveau','Utiliser']),
        allowNull: false,
    }

});

module.exports = Produit;
const { Sequelize, DataTypes } = require("sequelize");
const db = require('../index.js'); 
const sequelize = db.sequelize;

const Commande = sequelize.define('commande', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    produits: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    adresseLivraison: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    methodePaiement: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    etat: {
        type: DataTypes.ENUM('En traitement', 'Livrée', 'Annulée'),
        defaultValue: 'En traitement',
    }
});

module.exports = Commande;

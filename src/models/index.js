const config = require('../config/config');
const mysql = require('mysql2');
const Sequelize = require('sequelize');


module.exports =db ={}

const { host,port,user,password, database } = config.database;
const pool = mysql.createPool({host,port,user,password});
pool.query(`CREATE DATABASE IF NOT EXIST ${database}`);

const sequelize = new Sequelize(database,user,password,{
    dialect:"mysql",
    pool:{
        max: config.pool.max ,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
    }
})

db.sequelize = sequelize;


const User = require('./User');
const Categorie = require('./Categorie');
const Produit = require('./Produit');

Categorie.hasMany(Produit);
Produit.belongsTo(Categorie);

User.hasMany(Produit);
Produit.belongsTo(User);

// sync all models with database
sequelize.sync({ force: false });




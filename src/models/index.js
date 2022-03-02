'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const Clothes = require('./clothes');
const Food = require('./food');
const Collection = require('./collection-class');
require('dotenv').config();

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
} : {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

let clothesModel = Clothes(sequelize,DataTypes);
let foodModel = Food(sequelize, DataTypes);

let clothesCollect = new Collection(clothesModel);
let foodCollect = new Collection(foodModel);

module.exports = {
    db: sequelize,
    clothesCollection: clothesCollect,
    foodCollection:foodCollect
}
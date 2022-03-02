'use strict';

const Clothes = (sequelize, DataTypes) => sequelize.define('clothes', {
    typs: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.INTEGER,
    }
})

module.exports = Clothes;
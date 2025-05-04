const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Prospect = sequelize.define('Prospect', {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        college: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
        },
        height: {
            type: DataTypes.STRING,
        },
        weight: {
            type: DataTypes.STRING,
        }
    },
    {
        tableName: 'draft-prospects',
        timestamps: false,
    });

module.exports = Prospect;

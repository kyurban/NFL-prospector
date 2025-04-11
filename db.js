const { Sequelize } = require('sequelize');
const password = process.env.DB_PASSWORD;
const username = process.env.NAME;

const sequelize = new Sequelize('NFL-Prospects', username, password, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
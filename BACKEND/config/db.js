// config/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('carrot', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres'
});
async function testDatabaseConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection to database has been established successfully.');
        await sequelize.close();
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

// Call the async function
// testDatabaseConnection();

module.exports = sequelize;
// Importing the Sequelize constructor
const Sequelize = require('sequelize');

// Configuring dotenv to load environment variables from a .env file
require('dotenv').config();

// Declaring the sequelize variable
let sequelize;

// Check for JAWSDB in environment variables to use in production (e.g., on Heroku)
if (process.env.JAWSDB_URL) {
  // Configuring the Sequelize instance for JawsDB
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Configuring the Sequelize instance for a local MySQL database
  sequelize = new Sequelize(
    process.env.DB_NAME,    // Database name
    process.env.DB_USER,    // Database user
    process.env.DB_PASSWORD,  // Database password
    {
      host: 'localhost',   // Database host
      dialect: 'mysql',    // Using the mysql dialect
      port: 3306           // Database port
    }
  );
}

// Exporting the sequelize connection for use in other files
module.exports = sequelize;

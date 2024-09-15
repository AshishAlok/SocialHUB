  const { DataTypes } = require('sequelize');
  const sequelize = require('../config/db');

  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true, // Specify email as the primary key
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    institute: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    tableName: "user"  // Define the table name explicitly
  });

  module.exports = User;

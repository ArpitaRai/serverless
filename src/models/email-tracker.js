const sequelize = require('../config/db-config.js');
const { Sequelize, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

const EmailTracker = sequelize.define("email-tracker",
  {
    id: {
      type: Sequelize.INTEGER,
      type: DataTypes.UUID, // Change the data type to UUID
      defaultValue: () => uuidv4(), 
      allowNull: false,
      primaryKey: true,
    },
    to_address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    result_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    expiry_time: {
      type: DataTypes.DATE, // Assuming expiry_time is of type DATE
      allowNull: false
    },
    verification_link:{
      type: Sequelize.STRING,
      allowNull: false
  }
  
    
},{
  timestamps: true, // Add timestamps to the table
  createdAt: 'email_created',

});

module.exports = EmailTracker;


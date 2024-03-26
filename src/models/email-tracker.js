import sequelize from '../config/db-config.js'; 
import Sequelize, {DataTypes} from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

const EamilTracker = sequelize.define("email-tracker",
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
    
},{
  timestamps: true, // Add timestamps to the table
  createdAt: 'account_created', 
  updatedAt: 'account_updated'
});

export default EamilTracker;

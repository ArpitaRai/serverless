const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
dotenv.config();

const sequelize = new Sequelize(process.env.MYSQL_DATABASE || 'nodeexpressmysql', process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    port: process.env.MYSQLPORT
});

// Sync the database and create tables if they don't exist
sequelize.sync({ force: process.env.DB_FORCE_SYNC === 'true' })
    .then(() => {
        console.log('Database synchronized successfully');
    })
    .catch((error) => {
        console.log('Error syncing database:', error);
    });


module.exports= sequelize;




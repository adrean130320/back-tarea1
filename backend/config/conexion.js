const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config({path:'.env'});
const dbSiscada= new Sequelize(process.env.DB_NAME ,process.env.DB_USER, process.env.DB_PASSWORD,{
    host :process.env.DB_HOST,
    port : process.env.DB_PORT=3306,
    dialect: 'mysql',
    freezeTableName: true,
    define:{
        timestamps: true
    }, 
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle:10000
    },
    // logging: false
});

try {
    dbSiscada.authenticate();
    dbSiscada.sync();
    console.log('Conexion a la base de datos correcta');
} catch (error) {
    console.log(error);
}


module.exports = dbSiscada;
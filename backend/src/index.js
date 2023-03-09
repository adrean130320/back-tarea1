const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app= express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.options('*', cors());
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token,  X-Requested-With, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// rutas
app.use('/', require('./routes/usuarioRoutes'));



app.listen(PORT , ()=>{
    console.log(`server listening on port ${PORT}` );
});
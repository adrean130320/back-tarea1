const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/user/searchById',  usuarioController.searchById);
router.get('/user/getusers',  usuarioController.getUsers);

module.exports= router;
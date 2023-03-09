const usuarioServices = require('../services/usuarioServices');

exports.getUsers= async (req, res) => {
        const usuarios = await usuarioServices.getUsers();
        res.status(usuarios.status).json(usuarios);
};

exports.searchById = async (req, res) => {
        const {id} = req.body;
        console.log(id);
        const usuario = await usuarioServices.searchById(id);
        res.status(usuario.status).json(usuario);
};
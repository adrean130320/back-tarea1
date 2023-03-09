const usuarioServices = require('../services/usuarioServices');

exports.getUsers= async (req, res) => {
    try {
        console.log("object");
        const usuarios = await usuarioServices.getUsers();
        res.status(usuarios.status).json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.searchById = async (req, res) => {
    try {
        const usuario = await usuarioServices.searchById(req.body.id);
        res.status(usuario.status).json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};
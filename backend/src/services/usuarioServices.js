const httpStatus = require('http-status');
const Personas = require('../models/usuarioModel');
const conexion = require('../../config/conexion');

exports.getUsers = async () => {
    try {
        const usuarios = await Personas.findAll({
            limit: 10,
            order: [
                conexion.literal('RAND()')
            ]}
        );
        return { status: httpStatus.OK , usuarios};
    } catch (error) {
        return { status: httpStatus.NOT_FOUND , message: 'Usuarios no encontrados' };
    }
};

exports.searchById = async (id) => {
    try {
        const usuario = await Personas.findByPk(id);
        return { status: httpStatus.OK , usuario};
    } catch (error) {
        return { status: httpStatus.NOT_FOUND , message: 'Usuario no encontrado' };
    }
};
import pkg from 'jsonwebtoken';
const { sign, verify } = pkg;
import Usuario from '../models/usuario.js'


const validarJWT = async (req, res, next) =>{
    const token = req.header('x-token');

    if (!token) {
        return res.status(400).json({
            msg: "No hay token"
        })
    }

    try {
        const {uid} = verify(token, process.env.SECRETOPRIVATEKE)
        const usuario = await Usuario.findById(uid);
        req.usuario = usuario;
    } catch (error) {
        
    }

    next();
}

export default validarJWT;
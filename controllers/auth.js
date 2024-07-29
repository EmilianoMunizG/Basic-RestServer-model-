import { response } from "express";
import Usuario from '../models/usuario.js'
import bcryptjs from 'bcryptjs';
import generarJWT from '../helpers/generar-jwt.js'


const login = async (req, res = response) => {


    const {mail, password} = req.body
   
   try {

    //verificar mail
    const usuario = await Usuario.findOne({ mail });
    if (!usuario) {
        return res.status(400).json({
            msg: "Error - Email salio mal"
        })
    }

    //verificar si esta activo


    //verificar constraseña
    const existePass = bcryptjs.compareSync(password, usuario.password)
    if (!existePass) {
        return res.status(400).json({
            msg: "Error - password salio mal"
        })
    }

    //Generar el JWT
    const token = await generarJWT( usuario.id );

    res.json({
        tpken: token,
        mail: mail,
        password: password
    });
   } catch (error) {
    console.log(error)
    return res.status(500).json({
        msg: "Error - Comuniquese con un administrador"
    })
   }
}

export { 
    login
};

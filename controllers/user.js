import  express, { response } from 'express'
import Usuario from '../models/usuario.js'
import bcryptjs from 'bcryptjs';

const getUser = (req, res = response) => {

  const { pageIndex, qty, nombres } = req.query

    res.json({
        "ok": true,
        "msg": "Get - Controller",
        pageIndex,
        qty,
        nombres
    })
  }

  const postUser = async (req, res = response) => {



    const { name, mail, password, role } = req.body
    const user = new Usuario({ name, mail, password, role }) 

    //verificar correo duploicado
    const emailExist = await Usuario.findOne({mail})
    if (emailExist) {
      return res.status(400).json({
        msg: 'Email already exists'
      })
    }

    //encriptar pass
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt)

    await user.save();
    
   

    res.json({
        "ok": true,
        "body": user
    })
  }

  const putUser = (req, res = response) => {

    const { id } = req.params;

    res.json({
        "ok": true,
        "msg": "Put - Controller",
        id
    })
  }

  const deleteUser = (req, res = response) => {
    res.json({
        "ok": true,
        "msg": "Delete - Controller"
    })
  }



  export { 
    getUser,
    postUser,
    putUser,
    deleteUser
 };
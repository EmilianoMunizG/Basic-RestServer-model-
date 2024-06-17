import  express, { response } from 'express'
import Usuario from '../models/usuario.js'
import bcryptjs from 'bcryptjs';

const getUser = async (req, res = response) => {

  const { limit = 5, from = 0 } = req.query
  //const query = { estado : true }

  const [total, users] = await Promise.all([
    Usuario.countDocuments(),  //como parametro iria query
    Usuario.find()
    .skip(Number(from))
    .limit(Number(limit))
  ]);
   
    res.json({
        total,
        users
    })
  }

  const postUser = async (req, res = response) => {

    const { name, mail, password, role } = req.body
    const user = new Usuario({ name, mail, password, role }) 

    //encriptar pass
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt)

    await user.save();
    
   

    res.json({
        "ok": true,
        "body": user
    })
  }

  const putUser = async(req, res = response) => {

    const { id } = req.params;
    const { _id, password, google, correo, ...rest } = req.body

    if (password) {
          //encriptar pass
    const salt = bcryptjs.genSaltSync();
    rest.password = bcryptjs.hashSync(password, salt)
    }

    const user = await Usuario.findByIdAndUpdate(id, rest, {new: true})

    res.json({
        "ok": true,
        id,
        user
    })
  }

  const deleteUser = async (req, res = response) => {
    const { id } = req.params;
    const user = await Usuario.findByIdAndDelete( id )
    //const user = await Usuario.findByIdAndUpdate( id, {estado:false} )   <== Para inactivarlo (Seria lo correcto)
    

    res.json({
      user
    })
  }



  export { 
    getUser,
    postUser,
    putUser,
    deleteUser
 };
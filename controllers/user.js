import  express, { response } from 'express'
import Usuario from '../models/usuario.js'

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

    const body = req.body
    const user = new Usuario(body) 
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
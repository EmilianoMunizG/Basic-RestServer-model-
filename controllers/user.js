import  express, { response } from 'express'

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

  const postUser = (req, res = response) => {

    const {name, age} = req.body
   //console.log(req.body)

    res.json({
        "ok": true,
        "msg": "Post - Controller",
        "name": name,
        "age": age
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
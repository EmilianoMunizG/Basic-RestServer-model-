import  express, { Router } from 'express'
import { getUser, postUser, putUser, deleteUser } from '../controllers/user.js'

const userRouter = Router();

userRouter.get('/', getUser)

  userRouter.put('/:id', putUser)

  userRouter.delete('/', deleteUser)

  userRouter.post('/', postUser)


 export default userRouter;
import  express, { Router } from 'express'
import { getUser, postUser, putUser, deleteUser } from '../controllers/user.js'
import { check } from 'express-validator'
import validateFields from '../middlewares/validate-fields.js';
import { isValidRole, mailExist  } from '../helpers/db-validators.js';


const userRouter = Router();

userRouter.get('/', getUser)

  userRouter.put('/:id', putUser)

  userRouter.delete('/', deleteUser)

  userRouter.post('/', [
    check('name', 'This name is mandatory').not().isEmpty(),
    check('mail', 'This mail is not correct').isEmail(),
    check('mail').custom( mailExist ),
    check('password', 'The password must have a minimum of 6 chars').isLength({min: 6}),
    //check('role').custom( ( role ) => isValidRole(role) ),
    validateFields
  ] , postUser)


 export default userRouter;
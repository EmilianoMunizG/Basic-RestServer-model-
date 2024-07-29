import  express, { Router } from 'express'
import { getUser, postUser, putUser, deleteUser } from '../controllers/user.js'
import { check } from 'express-validator'
import validateFields from '../middlewares/validate-fields.js';
import validarJWT from '../middlewares/validate-jwt.js'
import { isValidRole, mailExist, userExistById  } from '../helpers/db-validators.js';


const userRouter = Router();

userRouter.get('/', getUser)

  userRouter.put('/:id', [
    check('id', 'No es un id valido').isMongoId(),
    //check('id').custom( userExistById ),
    validateFields
  ],putUser)

  userRouter.delete('/:id', [
    validarJWT
  ],deleteUser)

  userRouter.post('/', [
    check('name', 'This name is mandatory').not().isEmpty(),
    check('mail', 'This mail is not correct').isEmail(),
    check('mail').custom(mailExist),
    check('password', 'The password must have a minimum of 6 chars').isLength({ min: 6 }),
    validateFields
  ], postUser);


 export default userRouter;
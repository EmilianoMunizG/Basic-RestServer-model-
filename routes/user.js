import  express, { Router } from 'express'
import { getUser, postUser, putUser, deleteUser } from '../controllers/user.js'
import { check } from 'express-validator'
import validateFields from '../middlewares/validate-fields.js';
import Role from '../models/role.js'

const userRouter = Router();

userRouter.get('/', getUser)

  userRouter.put('/:id', putUser)

  userRouter.delete('/', deleteUser)

  userRouter.post('/', [
    check('name', 'This name is mandatory').not().isEmpty(),
    check('mail', 'This mail is not correct').isEmail(),
    check('password', 'The password must have a minimum of 6 chars').isLength({min: 6}),
    //check('role', 'This is not a valid role').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom( async(role = '') => {
      const roleExist = Role.findOne({role})
      if (!roleExist) {
        throw new Error(`${role} is not an actual role`)
      }
    }),
    validateFields
  ] , postUser)


 export default userRouter;
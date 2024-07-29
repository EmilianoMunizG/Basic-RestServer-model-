import  express, { Router } from 'express'
import { login } from '../controllers/auth.js';
import { check } from 'express-validator';

import validateFields from '../middlewares/validate-fields.js';

const authRouter = Router();

authRouter.post('/login',[
    check('mail', 'The mail is mandatory').isEmail(),
    check('password', 'The massword is mandatory').not().isEmpty(),
    validateFields
],
login)

export default authRouter;
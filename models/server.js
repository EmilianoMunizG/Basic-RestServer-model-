import  express, { Router } from 'express'
import cors from 'cors'
import userRouter from '../routes/user.js';
import authRouter from '../routes/auth.js';
import dbConnection from '../database/config.js';

export default class Server {

    constructor(){
         this.app = express()
         this.port = process.env.PORT;

         //CONNECT TO DATABASE
        this.connectDb();

         this.userRoutePath = '/api/user'
         this.authLoginPath = '/api/auth'

        this.middlewares();

        this.routes();
    }

    async connectDb(){
        dbConnection()
    }

    middlewares(){
        //cors  
        this.app.use( cors() )
        //get body and parse
        this.app.use( express.json() )
        //serve static content
        this.app.use( express.static('public') )
    }

    routes() {
        this.app.use(this.authLoginPath, authRouter)
        this.app.use(this.userRoutePath, userRouter)
    }
    
    listen() {
        this.app.listen(this.port ,  () => {
            console.log(`Example app listening on port ${this.port}`);
        })
    }
    
}

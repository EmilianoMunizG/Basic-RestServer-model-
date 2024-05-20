import { Schema, model } from "mongoose";

const userModel = Schema({
    name:{
        type: String,
        required: [true, 'The name is required'],
    },
    mail:{
        type: String,
        required: [true, 'The mail is required'],
    },
    password:{
        type: String,
        required: [true, 'The password is required'],
    },
    role:{
        type: String,
        required: [true, 'The name is required'],
        enum: ['USER_ROLE', 'ADMIN_ROLE']
    },
    img:{
        type: String,
    },
    google:{
        type: Boolean,
    }
});


const Usuario = model('Usuario', userModel);
export default Usuario;
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
    },
    img:{
        type: String,
    },
    google:{
        type: Boolean,
    }
});

userModel.methods.toJSON = function(){
    const { __v, password, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
}


const Usuario = model('Usuario', userModel);
export default Usuario;
import { Schema, model } from "mongoose";

const roleModel = Schema({
    role:{
        type: String,
        required: [true, 'The role is required'],
    }
});


const Role = model('Role', roleModel);
export default Role;
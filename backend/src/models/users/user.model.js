import mongoose from "mongoose";
import { type } from "os";
const userSchema = new mongoose.Schema(
    {
        fullName : {
            type : String,
            required : true,
        },
        email : {
            type : String,
            required : true,
            unique : true,
            lowercase : true
        },
        password :{
            type : String,
            required : true
        },
        products : {
            type : [String]
        }
    },
    {timestamps:true}
)

export const user = mongoose.model("user",userSchema);
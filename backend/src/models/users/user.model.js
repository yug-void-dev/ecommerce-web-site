import mongoose from "mongoose";
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
        products : 
            [
                {
                    type : mongoose.Schema.Types.ObjectId,
                    ref: "product"
                }
            ]
    },
    {timestamps:true}
)

export const user = mongoose.model("user",userSchema);
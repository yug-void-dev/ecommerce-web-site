import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        discription:{
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            default : 0,
        },
        discount: {
            type: Number,
            required: true,
            default : 0,
        },
        image: {
            type: string,
        },
        category: {
            type : ["Electronics"],
        }
    },
    {
        timestamps:true
    }
)

export const product = mongoose.model("product",productSchema);
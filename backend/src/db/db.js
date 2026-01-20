import mongoose from "mongoose";
const connectDB = async () => {
    try{
        const res = await mongoose.connect(process.env.DBURL)
        console.log("database connected successfully 🔥!!");
    }
    catch(error){
        console.log("Error");
        throw new Error(error)
    }
}
export default connectDB
import express from "express";
import connectDB from "./src/db/db.js";
import dotenv from 'dotenv'
dotenv.config()
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", () => {
  res.send("Login Page");
});

app.post("/auth/signup", (req, res) => {
    try {
        const data = req.body;+
        
    }
    catch (err) {
        res.send(`Error Occured in form submission ${err.message}`)
    }
});

app.post("/auth/signin", (req, res) => {
  const { email, password } = req.body;
  try{
    const isexist = user.findOne({email})
    if(!isexist){
        res.status(404).json({ message: "User not found" });
        return 
    }
    if(password == isexist.password){
        res.status(201).json({
            message : "user login successfully"
        })
        return 
    }
    else {
        res.status(401).json({
            message : "password is incorrect"
        })
        return 
    }
  }
  catch(error){
    res.status(500).send("Server error")
    return ;
  }
  
});

const port = process.env.PORT;
connectDB()
.then(()=>{
    app.listen(port, () => {
    console.log(`Server is listening on ${port} number 👌`);
});
})

import express from "express";
import { user } from "./src/models/users/user.model.js";
import connectDB from "./src/db/db.js";
import dotenv from 'dotenv'
dotenv.config()
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", () => {
  res.send("Login Page");
});

app.post("/auth/signup", async (req, res) => {
  try {
    const { fullname, password, email } = req.body;
    await user
      .create({
        fullname,
        email,
        password,
      })
      .then(() => res.status(201).json({ message: "Sign Up Successful" }));
  } catch (err) {
    res.send(`Error Occured in form submission ${err.message}`);
  }
});

app.post("/auth/signin", (req, res) => {
  const { email, password } = req.body;
  
});

const port = process.env.PORT;
connectDB()
.then(()=>{
    app.listen(port, () => {
    console.log(`Server is listening on ${port} number 👌`);
});
})

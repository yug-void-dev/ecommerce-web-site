import express from "express";
import { user } from "./src/models/users/user.model.js";
import connectDB from "./src/db/db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", () => {
  res.send("Login Page");
});

app.post("/api/auth/signup", async (req, res) => {
  console.log(req.body)
  try {
    const { fullName, password, email } = req.body;
    await user
      .create({
        fullName,
        email,
        password,
      })
      .then(() => res.status(201).json({ message: "Sign Up Successful" }));
  } catch (err) {
    res.status(500).json({message : err.message});
    }
});

app.post("/api/auth/signin", (req, res) => {
  const { email, password } = req.body;
  try {
    const isexist = user.findOne({ email });
    if (!isexist) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    if (password == isexist.password) {
      res.status(201).json({
        message: "user login successfully",
      });
      return;
    } else {
      res.status(401).json({
        message: "password is incorrect",
      });
      return;
    }
  } catch (error) {
    res.status(500).send("Server error");
    return;
  }
});

const port = process.env.PORT;
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on ${port} number 👌`);
  });
});

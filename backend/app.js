import express from "express";
import { user } from "./src/models/users/user.model.js";
import connectDB from "./src/db/db.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import JsonWebToken from "jsonwebtoken";
import authMiddleware from "./src/middleware/token.js";
import productDataRouter from "./src/routes/productData.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", productDataRouter);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.post("/api/auth/signup", async (req, res) => {
  console.log(req.body);
  try {
    const { fullName, password, email } = req.body;

    const isexist = await user.findOne({ email });

    if (isexist) {
      res.status(409).json({ message: "User Already exist" });
      return;
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await user
      .create({
        fullName,
        email,
        password: hashPassword,
      })
      .then(() => res.status(201).json({ message: "Sign Up Successful" }));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/api/auth/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const isexist = await user.findOne({ email });
    if (!isexist) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    if (bcrypt.compare(password, isexist.password)) {
      const token = JsonWebToken.sign(req.body, process.env.SecretKey, {
        expiresIn: "12h",
      });

      res.status(201).json({
        message: "user login successfully",
        token,
      });
      return;
    } else {
      res.status(409).json({
        message: "password is incorrect",
      });
      return;
    }
  } catch (error) {
    res.status(500).send("Server error");
    return;
  }
});

app.get("/api/user/home", authMiddleware, (req, res) => {
  res.status(201).json({ message: "Welcome" });
});

const port = process.env.PORT;
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on ${port} number 👌`);
  });
});

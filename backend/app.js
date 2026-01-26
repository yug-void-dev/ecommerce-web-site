import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { user } from "./src/models/users/user.model.js";
import connectDB from "./src/db/db.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import JsonWebToken from "jsonwebtoken";
import authMiddleware from "./src/middleware/token.js";
import productDataRouter from "./src/routes/productData.js";
import { admin } from "./src/models/admin/admin.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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
      return res.status(409).json({ message: "User Already exist" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await user.create({
      fullName,
      email,
      password: hashPassword,
    });

    res.status(201).json({ message: "Sign Up Successful" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/api/auth/user/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const isexist = await user.findOne({ email });
    if (!isexist) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, isexist.password);

    if (isMatch) {
      const token = JsonWebToken.sign(
        { userId: isexist._id, email: isexist.email },
        process.env.SecretKey,
        { expiresIn: "12h" },
      );
      return res.status(201).json({
        message: "user login successfully",
        token,
      });
    } else {
      return res.status(401).json({
        message: "password is incorrect",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/api/user/home", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Welcome" });
});

app.post("/api/auth/admin/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const isexist = await admin.findOne({ email });
    if (!isexist) {
      return res.status(404).json({ message: "admin not found" });
    }
    const isMatch = await bcrypt.compare(password, isexist.password);

    if (isMatch) {
      const token = JsonWebToken.sign(
        { adminId: isexist._id, email: isexist.email },
        process.env.SecretKey,
        { expiresIn: "1h" },
      );

      return res.status(200).json({
        message: "admin login successfully",
        token,
      });
    } else {
      return res.status(401).json({
        message: "password is incorrect",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/api/admin/home", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Welcome" });
});

const port = process.env.PORT;
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on ${port} number 👌`);
  });
});

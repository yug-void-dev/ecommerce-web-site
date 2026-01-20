import express from "express";
import { user } from "./src/models/users/user.model.js";
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
app.listen(port, () => {
  console.log(`Server is listening on ${port} number`);
});

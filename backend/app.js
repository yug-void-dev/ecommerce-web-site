import express from "express";
import connectDB from "./src/db/db";
const app = express();

app.get("/", () => {
  res.send("Login Page");
});

app.post("/auth/signin", (req, res) => {
  const { email, password } = req.body;
});

const port = process.env.PORT || 4000;
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on ${port} number 👌`);
  });
});

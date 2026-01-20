import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", () => {
  res.send("Login Page");
});

app.post("/auth/signup", (req, res) => {
    try {
        const data = req.body;
        
    }
    catch (err) {
        res.send(`Error Occured in form submission ${err.message}`)
    }
});



const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening on ${port} number`);
});

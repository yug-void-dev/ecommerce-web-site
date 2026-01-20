import express from 'express'

const app = express();

app.get('/', () => {
    res.send('Login Page')
})


const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is listening on ${port} number`);
})
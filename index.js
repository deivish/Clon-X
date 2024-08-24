const express = require("express");
const app = express();
const port = 3000;


const registerRouter = require('./routes/registerRoute');
const signinRouter = require('./routes/signinRoute');
const tweetsRouter = require('./routes/tweetsRoute');
const userRouter = require('./routes/userRoute');

app.use(express.json());


app.use('/:name', tweetsRouter);
app.use('/', userRouter)
app.use('/', registerRouter);
app.use('/', signinRouter);


app.listen(port, () => {
    console.log(`La app esta escuchando en <http://localhost>:${port}`);
});
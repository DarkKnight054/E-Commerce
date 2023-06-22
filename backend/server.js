
require('dotenv').config();
require('./config/db');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/userRoute');
const app = express();
const baseURL = '/api/v1';
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(`${baseURL}/users`,userRouter);

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is listening on http://localhost:${PORT}`);
})
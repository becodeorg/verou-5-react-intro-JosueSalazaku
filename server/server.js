import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
 
let todos = [];

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello World")
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
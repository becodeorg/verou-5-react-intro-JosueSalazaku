import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
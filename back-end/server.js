require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const homeRouter = require('./routes/homeRouter');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/data', homeRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on: localhost:${PORT}`));




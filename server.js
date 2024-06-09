const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const cors = require('cors');
require('dotenv').config();
const path = require("path");


app.use(cors()); // Enables CORS

// MongoDB connection string
const mongoURI = 'mongodb://127.0.0.1:27017/starWars';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });

  
// Routes
app.use('/api', require('./routes/auth'));



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
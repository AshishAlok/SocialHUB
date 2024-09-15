const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();
const jwtAuthUsers = require("./controllers/cookieJWTAuth")

const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');


const app = express();

// Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Enable CORS for all origins
app.use(cors());


// Routes
app.use('/auth', authRoutes);



let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT} ...`);
});

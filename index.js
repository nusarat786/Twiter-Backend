const express = require('express');
const app = express();
const dbConnect = require("./Mongoose/connect.js")
const userSchema = require('./Schema/userSchema.js'); // Import the user schema
const tweetSchema = require("./Schema/tweetSchema.js")
const bcrypt = require('bcrypt');
const validator = require('validator');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const auth = require("./Auth/auth.js")
const jwt = require('jsonwebtoken');
const multer = require('multer');
const countryList = require('./Auth/country.js');
const nodemailer = require('nodemailer');
const tweetRoutes = require('./Route/tweetRoute.js');
const userRoutes = require('./Route/userRoute.js');

//const 

// Configure multer for handling file uploads
const upload = multer();

dbConnect();

//console.log(countryList)
// Middleware to parse JSON in the request body
app.use(express.json());

// cookie parser
app.use(cookieParser());

// // cors 
// app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
// https://nusarat-tweeter-like-app.onrender.com/

// Allow requests from your local frontend and the hosted API
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000', 'https://nusarat-tweeter-like-app.onrender.com','https://haveliwalanusaratfrontendtwitter.onrender.com','https://twiter-frontend.vercel.app','https://twiter-frontend.vercel.app/']
}));

// using tweet routes
app.use('/tweetRoutes', tweetRoutes);

// using tweet routes
app.use('/userRoutes', userRoutes);


app.listen(4000, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", 4000);
})

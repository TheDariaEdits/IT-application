
const express = require("express");
const app = express();
const mongoose = require('mongoose')
const MongoStore = require("connect-mongo");
const logger = require("morgan");
const passport = require("passport");
const session = require("express-session");
const flash = require("express-flash");
const cors = require("cors");
const connectDB = require("../config/database");
const authRoutes = require("./routes/auth")
// const mainRoutes = require('./routes/main');

require('dotenv').config({path: './config/.env'});

// Passport config
require('../config/passport')(passport);

connectDB()

app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger('dev'));

// Sessions stored in MongoDB
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({mongoUrl: process.env.DB_STRING }),
    })
  );;
  
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
// app.use('/', mainRoutes);
app.use('/auth', authRoutes);

 
app.listen(4000, ()=>{
    console.log('Server started.')
});    

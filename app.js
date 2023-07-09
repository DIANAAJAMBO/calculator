const express = require('express');
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("./logger/logger");
const timestamp = require("./Timestamp/Timestamps");


// support parsing of application/json type post data
app.use(bodyParser.json());

// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://kalungirasuli495:Kalungi2002@cluster0.t9q78iv.mongodb.net/?retryWrites=true&w=majority',{
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas ');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const index = require("./routes/save.js");
app.use("/", index);

// the logger has levels from the highest priority to the lowest
logger.error("error");
logger.warn("warn");
logger.info("info")
logger.verbose("verbose");
logger.debug("debug");
logger.silly("silly")


// this should always be the last line in your server file
//this is the port that the server will listen to plus the timeline
app.listen(3000, () => logger.info('Listening on port 3000  '+ timestamp));

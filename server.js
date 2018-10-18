//server.js
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    PORT = process.env.PORT || 5000,
    routes = require("./routes/index"),
    path = require("path"),//temp for testing only
    passport = require('passport'),
    cors = require('cors')

require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI || "mongodb://manuel:studio1@ds131313.mlab.com:31313/studioassist", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }



app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

//passport middleware
app.use(passport.initialize());

//passport config
require('./config/passport')(passport)


app.listen(PORT, () => {
    console.log("Were live on Port: ", PORT)
})
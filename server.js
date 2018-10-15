//server.js
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    PORT = process.env.PORT || 5000,
    routes = require("./routes/index"),
    path = require("path"); //temp for testing only

require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/studioAssist", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }



app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);


app.listen(PORT, () => {
    console.log("Were live on Port: ", PORT)
})
//server.js

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    PORT = process.env.PORT || 3000



app.listen(PORT, () => { console.log("Were live on Port: ", PORT) })

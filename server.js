const express = require('express');
const app = express();
const path = require("path");
const cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use('/',express.static(path.join(__dirname,'public')));

exports.app = app;

require('./yt');

app.listen(8080, null, null,()=>console.log("up and running on port 8080"));
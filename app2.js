var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


var db = mongoose.connect('mongodb://localhost/mongosysnet');

var TableStatus = require('./models/tableStatusModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

tableStatusRouter = require('./Routes/tableStatusRoutes')(TableStatus);

console.log("calling tablestatus"+TableStatus.name);

app.use('/api/tableStatuses', tableStatusRouter);


app.get('/', function (req, res) {
    res.send('welcome to my API!');
});

app.listen(port, function () {
    console.log('Gulp is running my app on  PORT: ' + port);
});

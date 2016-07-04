var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


var db = mongoose.connect('mongodb://localhost/mongosysnet');

var ReportKey = require('./models/reportKeyModel');
//console.log ("test Currency: "+)
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

reportKeyRouter = require('./Routes/reportKeyRoutes')(ReportKey);


app.use('/api/reportKeys', reportKeyRouter); 


app.get('/', function(req, res){
    res.send('welcome to my API!!');
});

app.listen(port, function(){
    console.log('Gulp is running my app on  PORT: ' + port);
});
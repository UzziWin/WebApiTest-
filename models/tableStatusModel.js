//mongoose is going to take data in Mongo and convert it into JSON object that we can then use in our code
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var tableStatusModel = new Schema({
      //_id: { type: ObjectId}, 
    ID: {type: Number},   
    name: { type: String },
    colour: { type: String },
    duration: { type: Number, default: 360 },
    //DataSet: {type: String}

});

module.exports = mongoose.model('TableStatus', tableStatusModel);



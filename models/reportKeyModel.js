var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var reportKeyModel = new Schema({
    keyId: {
        type: Number
    },
    keyName: {type: String},
    dataSet: {type: String}
});

module.exports= mongoose.model('ReportKey', reportKeyModel, 'ReportKeys');
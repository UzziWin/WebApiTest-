var mongoose = require('mongoose')
require('mongoose-double')(mongoose);
 
var SchemaTypes = mongoose.Schema.Types;
//var mySchema = new Schema({ double: SchemaTypes.Double });







//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

var currencyModel = new mongoose.Schema ({
    currencyISOCode:  {type: String}, 
    currency:  {type: String}, 
    sign:  {type: String}, 
   // roundToNearest: {double: SchemaTypes.Double }, 
   // dataSet: {type: String}
});





module.exports= mongoose.model('Currency', currencyModel);
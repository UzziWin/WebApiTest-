var express = require('express');


var routes = function(Currency){
    var currencyRouter = express.Router();

    currencyRouter.route('/')
          .get(function(req,res){

            var query = {};

            if(req.query.code)
            {
                query.code = req.query.code;
            }
            Currency.find(query, function(err, currencies){
                if(err)
                    res.status(500).send(err);
                else
                {
                    res.json(currencies);
                    console.log ("Length of currencies: "+currencies.length);
                    console.log ("Response: "+res.status);
                }    
            });
        });

 /*   currencyRouter.use('/:currencyId', function(req,res,next){
        Currency.findById(req.params.currencyId, function(err,currency){
            if(err)
                res.status(500).send(err);
            else if(currency)
            {
                req.currency = currency;
                next();
            }
            else
            {
                res.status(404).send('no currency found');
            }
        });
    }); */
    
   return currencyRouter;
};

module.exports = routes;


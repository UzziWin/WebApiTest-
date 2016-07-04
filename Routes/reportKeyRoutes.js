var express = require('express');


var routes = function(ReportKey){
    var reportKeyRouter = express.Router();

    reportKeyRouter.route('/')
          .get(function(req,res){

            var query = {};
console.log ("Outside keyName: "+req.query.keyName);
           if(req.query.keyName)
            {
                console.log ("Inside keyName: "+req.query.keyName);
                query.keyName = req.query.keyName;
            }
            console.log ("Query: "+query);
                    
            ReportKey.find(query, function(err, reportKeys){
                if(err)
                    res.status(500).send(err);
                else
                {
                    res.json(reportKeys);
                    console.log ("Length of reportKeys: "+reportKeys.length);
                    console.log ("Response: "+res.status);
                }    
            });
        });

    reportKeyRouter.use('/:keyId', function(req,res,next){
        ReportKey.findById(req.params.keyId, function(err,reportKey){
            if(err)
                res.status(500).send(err);
            else if(reportKey)
            {
                req.reportKey = reportKey;
                next();
            }
            else
            {
                res.status(404).send('no report Key found');
            }
        });
    }); 
    
   return reportKeyRouter;
};

module.exports = routes;


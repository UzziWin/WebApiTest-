var express = require('express');


var routes = function(TableStatus){
    var tableStatusRouter = express.Router();

    tableStatusRouter.route('/')
        .post(function(req, res){
            var tableStatus = new TableStatus(req.body);
            tableStatus.save();
            res.status(201).send(tableStatus);

        })
        .get(function(req,res){

            var query = {};

            if(req.query.name)
            {
                query.name= req.query.name;
            }
            TableStatus.find(query, function(err,tableStatuses){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(tableStatuses);
            });
        });

    tableStatusRouter.use('/:tableStatusId', function(req,res,next){
        TableStatus.findById(req.param._id, function(err,tableStatus){
            console.log("Request Body of ID"+req.param._id);
            if(err)
                res.status(500).send(err);
            else if(tableStatus)
            {
                req.tableStatus = tableStatus;
                next();
            }
            else
            {
                res.status(404).send('no tableStatus found');
            }
        });
    });
    tableStatusRouter.route('/:tableStatusId')
        .get(function(req,res){

            res.json(req.tableStatus);

        })
        .put(function(req,res){
            req.tableStatus._id = req.body._id;
            req.tableStatus.ID = req.body.ID;
            req.tableStatus.name = req.body.name;
            req.tableStatus.colour = req.body.colour;
            req.tableStatus.duration = req.body.duration;
            req.tableStatus.save(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.json(req.tableStatus);
                }
            });
        })
        .patch(function(req,res){
            if(req.body._id)
                delete req.body._id;

            for(var p in req.body)
            {
                req.tableStatus[p] = req.body[p];
            }

            req.tableStatus.save(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.json(req.tableStatus);
                }
            });
        })
        .delete(function(req,res){
            req.tableStatus.remove(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.status(204).send('Removed');
                }
            });
        });
    return tableStatusRouter;
};

module.exports = routes;
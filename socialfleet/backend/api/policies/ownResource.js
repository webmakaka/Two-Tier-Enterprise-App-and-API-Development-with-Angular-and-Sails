module.exports = function(req, res, next){
    var model = req.options.model;

    if(!model){
        throw "My throw: model is required for ownResource policy";
    }

    var Model = req._sails.models[model];

    Model.findOne(req.params.id).exec(function(err, record){

        console.log("=======beg========");
        console.log(record);
        console.log("=======end========");

        if(!record.owner){
            throw "My throw: model requires owner property for ownResource policy";
        }

        if(record.owner !== req.userId){
            return res.status(401).send({error: 'My throw: You do not have access to that resource'});
        }

        req.record = record;

        next();
    });
};

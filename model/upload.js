var uploadDb = require("./upload/upload-db.js");
var upMods = uploadDb.uploadModel;

function Upload(){
    Upload.prototype.create = function(properties, callback){
        var reg = new regMods(properties);
        upMods.save(function(err, data){
            if(err){
                callback(err);
            } else {
                callback(data !== null ? data.toJSON() : null);
            }
        });
    };

    Upload.prototype.findAll = function(callback){
        upMods.find({}, function(err, data){
            if(err){
                callback(err);
            } else {
                callback(data);
            }
        });
    };

    Upload.prototype.findById = function(id, callback){
        upMods.findOne({'_id':id}).lean().exec(function(err, data){
            if(err){
                callback(err);
            } else {
                callback(data);
            }
        });
    };

    Upload.prototype.update = function (options, callback) {

        upMods.update({ "oid": options._id },
            {
                $set: {
                    "firstname": options.fname,
                    "lastname": options.lname,
                    "address": options.address
                }
            }, function (err, data) {
                if (err) {
                    callback(err);
                } else {

                    callback(data);
                }
            });
    };


    Upload.prototype.deleteById = function(id, callback){
        upMods.deleteOne({'_id':id}, function(err, data){
            if(err){
                callback(err);
            } else {
                callback(data);
            }
        });
    };
};

module.exports.Upload = Upload;

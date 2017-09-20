var nokDb = require("./nok/nok-db.js");
var nokMods = nokDb.nokModel;

function Nok(){
    Nok.prototype.create = function(properties, callback){
        var nok = new nokMods(properties);
        nok.save(function(err, data){
            if(err){
                callback(err);
            } else {
                callback(data !== null ? data.toJSON() : null);
            }
        });
    };

    Nok.prototype.findAll = function(callback){
        nokMods.find({}, function(err, data){
            if(err){
                callback(err);
            } else {
                callback(data);
            }
        });
    };

    Nok.prototype.findById = function(id, callback){
        nokMods.findOne({'_id':id}).lean().exec(function(err, data){
            if(err){
                callback(err);
            } else {
                callback(data);
            }
        });
    };

   Nok.prototype.update = function (options, callback) {

        nokMods.update({ "registration_id": options.registration_id },
            {
                $set: {
                    "nok_name": options.nok_name,
                    "nok_phone": options.nok_phone,
                    "nok_address": options.address,
                    "registration_id":options.rid
                }
            }, function (err, data) {
                if (err) {
                    callback(err);
                } else {

                    callback(data);
                }
            });
    };

    Nok.prototype.deleteById = function(id, callback){
        nokMods.deleteOne({'_id':id}, function(err, data){
            if(err){
                callback(err);
            } else {
                callback(data);
            }
        });
    };
};

module.exports.Nok = Nok;

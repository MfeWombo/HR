var registrationDb = require("./registration/registration-db.js");
var regMods = registrationDb.registrationModel;

function Registration(){
    Registration.prototype.create = function(properties, callback){
        var reg = new regMods(properties);
        reg.save(function(err, data){
            if(err){
                callback(err);
            } else {
                callback(data !== null ? data.toJSON() : null);
            }
        });
    };

    Registration.prototype.findAll = function(callback){
        regMods.find({}, function(err, data){
            if(err){
                callback(err);
            } else {
                callback(data);
            }
        });
    };


exports.Registration.prototype.findById = function(id){
  return new Promise(function(resolve, reject){
    regMods.find({id: id}).exec(function (error, results) {
      if(error){
        reject({error: error});
      }
      else {
        resolve(results);
      }
    });
  });
};


    // Registration.prototype.findById = function(id, callback){
    //     regMods.findOne({'_id':id}).lean().exec(function(err, data){
    //         if(err){
    //             callback(err);
    //         } else {
    //             callback(data);
    //         }
    //     });
    // };

    Registration.prototype.update = function (options, callback) {

        regMods.update({ "oid": options._id },
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


    Registration.prototype.deleteById = function(id, callback){
        regMods.deleteOne({'_id':id}, function(err, data){
            if(err){
                callback(err);
            } else {
                callback(data);
            }
        });
    };
};

module.exports.Registration = Registration;

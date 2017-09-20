var educationDb = require("./education/education-db.js");
var eduMods = educationDb.educationModel;

function Education(){
    Education.prototype.create = function(properties, callback){
        var edu = new eduMods(properties);
        edu.save(function(err, data){
            if(err){
                callback(err);
            } else {
                callback(data !== null ? data.toJSON() : null);
            }
        });
    };

    Education.prototype.findAll = function(callback){
        eduMods.find({}, function(err, data){
            if(err){
                callback(err);
            } else {
                callback(data);
            }
        });
    };

    Education.prototype.findById = function(id, callback){
        eduMods.findOne({'_id':id}).lean().exec(function(err, data){
            if(err){
                callback(err);
            } else {
                callback(data);
            }
        });
    };

  Education.prototype.update = function (options, callback) {

        eduMods.update({ "registration_id": options.registration_id },
            {
                $set: {
                    "school_name":options.school_name,
                     "degree": options.degree,
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


    Education.prototype.deleteById = function(id, callback){
        eduMods.deleteOne({'_id':id}, function(err, data){
            if(err){
                callback(err);
            } else {
                callback(data);
            }
        });
    };
};

module.exports.Education = Education;

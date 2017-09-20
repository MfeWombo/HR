/**CRUD */
var nokDb = require("./noks/noks-db.js");
var noksModel = nokDb.nokModel;


function Nok() {
    Nok.prototype.create = function (options, callback) {
        var a = new noksModel(options);
        a.save(function (err, data) {
            if (err) {
                callback(err);
            } else {
                callback(data !== null ? data.toJSON() : null);
            }
        })
    };

    Nok.prototype.findAll = function (callback) {
        noksModel.find({}, function (err, data) {
            if (err) {
                callback(err);
            } else {
                callback(data);
            }
        })
    };

    Nok.prototype.findById = function (id, callback) {
        noksModel.find({ _id: id }).lean().exec(function (err, data) {
            if (err) {
                callback(err);
            } else {
                callback(data);
            }
        })
    };

    Nok.prototype.update = function (options, callback) {

        noksModel.update({ "register_id": options.register_id },
            {
                $set: {
                    "nok_name": options.nok_name,
                    "nok_phoneNo": options.nok_phoneNo,
                    "nok_address": options.address
                }
            }, function (err, data) {
                if (err) {
                    callback(err);
                } else {

                    callback(data);
                }
            })
    };

    Nok.prototype.deleteById = function (id, callback) {
        noksModel.deleteOne({ '_id': id }, function (err, data) {
            if (err) {
                callback(err);
            } else {
                callback(data);
            }
        });
    };


}


module.exports.Nok = Nok;
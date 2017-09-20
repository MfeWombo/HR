var db = global.db;

var Schema = db.Schema;
var nokSchema = new Schema({

        nok_name: {
      		type: String,
          default: ""
          
      	},
        nok_address: {
      		type: String,
          default: ""
         
      	},
        nok_phone:{
      		type: String,
          default: ""
          
        },
        registration_id:{
      		type: String
        }
    });

module.exports.nokModel = db.model('nok', nokSchema);

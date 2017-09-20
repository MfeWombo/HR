var db = global.db;

var Schema = db.Schema;
var registrationSchema = new Schema({

        firstname: {
      		type: String,
          // required:true

          
      	},
        lastname: {
      		type: String,
          //  required:true

          
      	},
        address:{
      		type: String,
          // required:true
        },
        email:{
          type:String,
          required:true
        }
    });

module.exports.registrationModel = db.model('registration', registrationSchema);

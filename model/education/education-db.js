var db = global.db;

var Schema = db.Schema;
var educationSchema = new Schema({

        school_name: {
      		type: String,
          // required:true
          
      	},
        degree: {
      		type: String,
          // required:true
          
      	},
        registration_id:{
          type: String,
          default: ""
        }
    });

module.exports.educationModel = db.model('education', educationSchema);

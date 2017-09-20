var db = global.db;

var Schema = db.Schema;
var uploadSchema = new Schema({

        file: {
      		type: String,
          default: ""

          
      	},
        filename: {
      		type: String,
           default: ""

          
      	},
        date:{
      		type: String,
          default: ""

          
       }
    });

module.exports.uploadModel = db.model('upload', uploadSchema);

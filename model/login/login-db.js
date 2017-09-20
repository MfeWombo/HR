var db = global.db;
var Schema = db.Schema;


var UserSchema = new Schema({

        Username: {
      		type: String,
            required: true

          
      	},
        Password: {
            presence: true,
            length: {
                minimum: 6,
                message: "must be at least 6 characters"
            }
        }

          
});

module.exports.UserModel = db.model('User', UserSchema);

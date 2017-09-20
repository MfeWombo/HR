var db = global.db;
var Schema = db.Schema;

var nokSchema = new Schema(
    {
        employee_id: {
            type:String, 
            default:""
        },
        nok_name : {
            type:String,
            // required:true
        },
        nok_phoneNo : {
            type:Number, 
            default:""
        },
        relationship: {
            type: String,
            // required:true
        },
        nok_address: {
            type:String,
            // required:true
        }
    
    }
);

/**ALIAS EXPORTS */
// noks is the name of the collection
module.exports.nokModel = db.model('noks', nokSchema);

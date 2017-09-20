//  individual = require('./individual.js'),
    // corporate = require('./corporate.js'),
    // registration = require('./account.js');
   var registration = require('./registration.js'),
    nok = require('./nok.js'),
    education = require('./education.js');
    login = require('./login.js'),
    upload = require("./upload.js");

function route(app){

// individual.route(app);
// corporate.route(app);
registration.route(app);
nok.route(app);
education.route(app);
login.route(app);
upload.route(app);

}

module.exports.route = route;

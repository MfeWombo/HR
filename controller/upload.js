
function route (app){

    app.get('/upload', function (req, res, next) {
        res.render('upload');
    });


//     app.post('/education/new', function(req, res, next){
//       var form = {
//         email: req.body.email,
//         password: req.body.password,
        
//       };
//       var Educat = require("../model/education.js").Education;

//       var edu = new Educat(req.body);
//       edu.create(form, function(data){
//       res.json(data);
//       });
//     });


// app.get('/education/all', function (req, res, next){

//     	var Indiv = require("../model/education.js").Education;

// 		var c = new Indiv();

// 		c.findAll(function(data) {
// 			res.json(data);
// 		});
// 	});



// app.get('/education/l/:id', function (req, res, next) {

// 		var Indivi = require("../model/education.js").Education;
// 		var c = new Indivi();

// 		if(req.params.id === ""){
// 				res.json({"status":"-102", "info":"(id) parameter is required"});
// 				return;
// 		}

// 		var id = req.params.id;
// 		c.findById(id, function(data) {
// 				res.json(data);
// 		});
// 	});

//   // app.post('/education/update/:id', function (req, res) {
//   //       console.log("This is me " + req.body._id);
//   //   var a = {
//   //     title: req.body.title,
//   //     firstname: req.body.firstname,
//   //     lastname : req.body.lastname,
//   //     gender: req.body.gender,
//   //     nationality: req.body.nationality,
//   //     date_of_birth: req.body.dob,
//   //     state_of_origin: req.body.state,
//   //     address: req.body.address,
//   //     lga_address: req.body.lga_address,
//   //     phone: req.body.phone,
//   //     email: req.body.email,
//   //     occupation: req.body.occupation,
//   //     market_associated: req.body.market_associated,
//   //     park_associated: req.body.park_associated,
//   //     company_category: req.body.comp_cat,
//   //     office_address: req.body.office_address,
//   //     office_lga: req.body.office_lga,
//   //     drivers_license : req.body.dlicense,
//   //     national_id : req.body.national_id,
//   //     passport_number : req.body.passport_number,
//   //     disability : req.body.disability,
//   //     user_id : req.body.user_id
//   //   };
//   //
//   // 		var In = require("../models/individual.js").Individual;
//   // 		var upd = new In();
//   //
//   // 		upd.update(a, function(data, err) {
//   // 				res.json(data);
//   // 		});
//   // 	});

// 	app.delete('/upload/:id', function (req, res, next) {

// 			var Indiviv = require("../models/education.js").Education;
// 			var c = new Indiviv();

// 			if(req.params.id === ""){
// 					res.json({"status":"-102", "info":"(id) parameter is required"});
// 					return;
// 			}

// 			var id = req.params.id;
// 			c.deleteById(id,function(data) {
// 					res.json(data);
// 			});
// 		});

 }


module.exports.route = route;

_     = require('lodash');
function route (app){

    app.get('/register', function (req, res, next) {
        res.render("register");
    });


    app.post('/register', function(req, res,next){
      var form = {
        firstname: req.body.fname,
        lastname : req.body.lname,
		email : req.body.email,
        address: req.body.address,
        nok_name: req.body.nok_name,
        nok_address: req.body.nok_address,
        nok_phone : req.body.nok_phone,
        school_name: req.body.school_name,
        degree: req.body.degree
      };
	  if(_.isEmpty(req.body.fname) || _.isEmpty(req.body.lname)){
		 return res.redirect('/registration')
	  }
	  	
	var register = require('../libs/registration.js');
      register.once('complete', function(form, id) {
        console.log("item saved to database " + form + id);
        res.json(JSON.stringify(form));

		});
      register.registerBootstrap(form);

	  });

	  

    app.post('/registration/create', function(req, res, next){
      var form = {
        firstname: req.body.fname,
        lastname : req.body.lname,
        address: req.body.address
      };
      var Regist = require("../model/registration.js").Registration;

      var reg = new Regist(req.body);
      reg.create(form, function(data){
      res.json(data);
      });
	  });




app.get('/registration/all', function(req, res, next){

    	var Indiv = require("../model/registration.js").Registration;

		var c = new Indiv();

		c.findAll(function(data) {
			res.json(data);
		});
	});



app.get('/registration/:id', function(req, res, next){
	var Indivi = require("../model/registration.js").Registration;
		var c = new Indivi();

  var promise = todosDataOps.Registration(parseInt(request.params.id));
  promise.then(function(data){
    res.send(data);
  }, function (error) {
    res.status(500).send({error: error});
  });
});

// app.get('/registration/l/:id', function(req, res, next) {

// 		var Indivi = require("../model/registration.js").Registration;
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

 


       app.post('/registration/update/:id', function (req, res, next) {
		//res.send('welcome to students module');
		//res.send("yipee na me daser");
		var option = {
		firstname: req.body.fname,
        lastname : req.body.lname,
        address: req.body.address,
        };
		var k = require("../model/nok.js").Nok;

		var c = new k();
		c.update(option, function (data, err) {
			//console.log(data);
			res.json(data);
		});


	});


	app.delete('/registration/:id', function (req, res, next) {

			var Indiviv = require("../models/registration.js").Registration;
			var c = new Indiviv();

			if(req.params.id === ""){
					res.json({"status":"-102", "info":"(id) parameter is required"});
					return;
			}

			var id = req.params.id;
			c.deleteById(id,function(data) {
					res.json(data);
			});
		});

}


module.exports.route = route;

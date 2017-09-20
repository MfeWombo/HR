_              = require('lodash');
function route(app) {
app.get('/noks', function (req, res) {
		//res.send('welcome to students module');
		res.render('new');
	});

	app.post('/noks/new', function (req, res) {
		//res.send('welcome to students module');
		//res.send("yipee na me daser");
		var option = {
			employee_id: req.body.eid,
			nok_name: req.body.name,
			nok_phoneNo: req.body.phoneNo,
			relationship: req.body.rship,
			nok_address: req.body.address

		};
		var kin = require("../model/nok.js").Nok;
		var c = new kin();

		c.create(req.body.eid, function (err, data) {
			//console.log(data);
			// res.json(data);
			if(err){
				res.render('new');
			}else{
			res.redirect('/noks');
			}
		});


	});

	app.get('/noks/all', function (req, res, next) {

		var k = require("../model/nok.js").Nok;
		var c = new k();

		c.findAll(function (data) {
			res.render('index', { data: noks });
		});
	});



	app.get('/noks/l/:id', function (req, res, next) {

		var k = require("../model/nok.js").Nok;

		var c = new k();

		if (req.params.id === "") {
			res.json({ "status": "-102", "info": "(id) parameter is required" });
			return;
		}

		var id = req.params.id;
		c.findById(id, function (data) {
			res.json(data);
		});
	});

	app.post('/noks/update/:id', function (req, res) {
		//res.send('welcome to students module');
		//res.send("yipee na me daser");
		var option = {
			employee_id: req.body.eid,
			nok_name: req.body.name,
			nok_phoneNo: req.body.phoneNo,
			relationship: req.body.rship,
			nok_address: req.body.address

		};
		var k = require("../model/nok.js").Nok;

		var c = new k();
		c.update(option, function (data, err) {
			//console.log(data);
			res.json(data);
		});


	});


	app.delete('/noks/delete/:id', function (req, res, next) {

		var k = require("../model/nok.js").Nok;
		var c = new k();

		if (req.params.id === "") {
			res.json({ "status": "-102", "info": "(id) parameter is required" });
			return;
		}

		var id = req.params.id;
		c.deleteById(id, function (data) {
			res.send("deleted successfully");
		});
	});


	// app.get('/students/new', function(req,res){
	//     res.render('index.jade',{person : {
	//         name:'mfe',
	//         class:'jss1',
	//         age:11
	//     }
	//         });
	// });

}

module.exports.route = route;



function route (app){

    app.get('/nok', function (req, res, next) {
        res.send("Welcome to the Nok page");
    });


    app.post('/nok/new', function(req, res, next){
      var form = {
        nok_name: req.body.nok_name,
        nok_address: req.body.nok_address,
        nok_phone : req.body.nok_phone,
        registration_id : req.body._id
      };
      var Nok = require("../model/nok.js").Nok;

      var nok = new Nok(req.body);
      nok.create(form, function(data){
      res.json(data);
      });
    });

app.get('/nok/all', function (req, res, next){

    	var Indiv = require("../model/nok.js").Nok;

		var c = new Indiv();

		c.findAll(function(data) {
			res.json(data);
		});
	});



app.get('/nok/l/:id', function (req, res, next) {

		var Indivi = require("../model/nok.js").Nok;
		var c = new Indivi();

		if(req.params.id === ""){
				res.json({"status":"-102", "info":"(id) parameter is required"});
				return;
		}

		var id = req.params.id;
		c.findById(id, function(data) {
				res.json(data);
		});
	});

  
app.post('/noks/update/:id', function (req, res) {
		//res.send('welcome to students module');
		//res.send("yipee na me daser");
		var option = {
			nok_name: req.body.nok_name,
        nok_address: req.body.nok_address,
        nok_phone : req.body.nok_phone,
        registration_id : req.body._id

		};
		var k = require("../model/nok.js").Nok;

		var c = new k();
		c.update(option, function (data, err) {
			//console.log(data);
			res.json(data);
		});


	});


	app.delete('/nok/:id', function (req, res, next) {

			var Indiviv = require("../model/nok.js").Nok;
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

var util = require('util');
var events = require('events');

var bioData = function() {
    events.EventEmitter.call(this);

    this.regbootstrap = function(form) {
        var self = this;
        // console.log(form);
        self.emit('entry', form);
        return this;

    };

    this._register = function(form) {
        var self = this;
        console.log('show me something', form);
        var mfe = {
            firstname: form.fname,
            lastname: form.lname,
            address: form.address
        }
        var Regist = require('../model/registration.js').Registration;
        var R = new Regist();
        R.create(mfe, function(data) {
            console.log(data);
            self.emit('doneregister', form, data._id);
        });


    };

    this._nok = function(form, id) {
        var self = this;
        console.log('i am the one'  + id);
        var kin = {
            nok_name: form.nok_name,
            nok_address: form.nok_address,
            nok_phone: form.nok_phone,
            registration_id: id
        };
	    var Nok = require('../model/nok.js').Nok;
         var N = new Nok();
        N.create(N, function(data){
        console.log(data);
     self.emit('donenok', form ,id);

    });
     };

   
    this._education = function(form ,id) {
        var self = this;
        console.log('show me something good');
        var edu ={
            school_name:form.school_name,
            degree: form.degree,
            registration_id: id
        };
        var Edu = require('../model/education.js').Education;
         var E = new Edu();
        E.create(edu, function(data){
        console.log(data);
        self.emit('complete');
        });

    };

    this.on('entry', this._register)
    this.on('doneregister', this._nok);
    this.on('donenok', this._education);
   


};
util.inherits(bioData, events.EventEmitter);
module.exports = new bioData();




var util = require('util');
var events = require('events');

var getLaptop = function(){
	events.EventEmitter.call(this);
  this.registerBootstrap = function(form) {
		var self = this;
		// console.log(form);
		self.emit("start", form);
		// return this;
	};

	this._bioData = function(form){
		var self = this;
    // console.log("Laptop", form);
		var bio = {
			firstname: form.firstname,
			lastname: form.lastname,
			address: form.address
		};

			var Regist = require("../model/registration.js").Registration;
      var reg = new Regist();
			reg.create(bio, function(data){
      	console.log(data);
				self.emit("bioCreated", form, data._id);
      });
	};

	this._nokData = function(form, id){
		// console.log("i am the one " + id);
		var self = this;
		var next_of_kin = {
			nok_name: form.nok_name,
      nok_address: form.nok_address,
      nok_phone : form.nok_phone,
      registration_id : id
		};

			var Nok = require("../model/nok.js").Nok;
      var nok = new Nok();
      nok.create(next_of_kin, function(data){
      console.log(data);
			self.emit("nokCreated", form, id);
      });
	};
	this._eduData = function(form, id){
		console.log("i am the one " + id);
		var self = this;
		var school = {
        school_name: form.school_name,
        degree: form.degree,
        registration_id : id
      };

			var Educat = require("../model/education.js").Education;
      var edu = new Educat();
      edu.create(school, function(data){
      console.log(data);
			self.emit("complete", form, id);
		});
	};
	// this._installOS = function(){
	// 	var self = this;
  //   console.log("OS");
	// 	self.emit("installingOS");
	// };
	// this._installAntivirus = function(){
	// 	var self = this;
  //   console.log("Antivirus");
	// 	self.emit("installingAntivirus");
	// };
	this._returnToHub = function(){
		var self = this;
    console.log("Hub");
		var tony = "Hello from the event Emmiter";
		self.emit("AtHub", tony);
	};

	this.on("start", this._bioData);
	this.on("bioCreated", this._nokData);
	this.on("nokCreated", this._eduData);
	// this.on("formattingLaptop", this._installOS);
	// this.on("installingOS", this._installAntivirus);
	// this.on("installingAntivirus", this._returnToHub);
};

util.inherits(getLaptop, events.EventEmitter);
module.exports = new getLaptop();

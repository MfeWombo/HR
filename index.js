global.db = require('./libs/db/db.js')();

var express      = require('express'),
  methodOverride = require('method-override'),
  cookieParser   = require('cookie-parser'),
  bodyParser     = require('body-parser'),
  _              = require('lodash'),
  promise    = require('bluebird'),
  compress       = require('compression'),
  logger         = require('morgan');

var app = express();

var router = require ('./controller/router');
app.enabled('trust proxy');


// Use all the following middlewares before the calling the home page.
app.use(logger('dev'));
app.use(compress());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser.json());
app.use(cookieParser());
app.set('view engine','pug');
app.set('views', __dirname + '/views');



var port = process.env.PORT || 8040;
var ip = process.env.IP || '127.0.0.1'; 
app.listen(port,ip);

app.get('/', function(req,res){
	res.render('test');

	 
});

router.route(app);



console.log("server started at " + ip + " and the port is " + port);

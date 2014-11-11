
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , MongoStore = require('connect-mongo')(express)
  , settings = require('./dataAccess/dbSettings')
  , partials = require('express-partials');

var app = express();
app.use(partials());
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('jianke'));
app.use(express.session({
	secret: settings.cookieSecret,
	key: settings.db,
	cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},//30 days
	store: new MongoStore({
		db: settings.db
	})
}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

require('./routes/index')(app);
require('./routes/user')(app);
require('./routes/music')(app);
require('./routes/home')(app);
require('./routes/ajax')(app);
require('./routes/moblie')(app);
//require('./routes/error')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

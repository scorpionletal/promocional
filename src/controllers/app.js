var express = require('express');
var app = express();
var server = require('http').Server(app);
// var io =require('socket.io')(server);
// var session = require('express-session');
// const notifier = require('node-notifier');
// var flash = require('connect-flash');


// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true,
	
// }));

// app.use(flash());



 
//  app.use(function(req, res, next){
// 	app.locals.success = req.flash('success'); 
	 
// 	next();
//   });
//  app.use(function(req, res, next){
// 	res.notifier = notifier; 
	 
// 	next();
//   });

  
// app.use(function(req, res, next){
//   res.io = io; 
   
//   next();
// });
  


   
module.exports = {app: app, server: server,express: express};
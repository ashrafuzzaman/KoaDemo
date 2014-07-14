'use strict';
var compress = require('koa-compress'),
    logger = require('koa-logger'),
    serve = require('koa-static'),
    route = require('koa-route'),
    koa = require('koa'),
    path = require('path'),
    app = module.exports = koa();

// Logger
app.use(logger());

// load('./routes.js');
var routes = require('./routes');

// var messages = require('./controllers/messages');
// app.use(route.get('/', messages.home));
// app.use(route.get('/messages', messages.list));
// app.use(route.get('/messages/:id', messages.fetch));
// app.use(route.post('/messages', messages.create));
// app.use(route.get('/async', messages.delay));


// Serve static files
app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());

if (!module.parent) {
  app.listen(9000);
  console.log('listening on port 9000');
}

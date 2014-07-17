'use strict';
var compress = require('koa-compress'),
    logger = require('koa-logger'),
    serve = require('koa-static'),
    koa = require('koa'),
    app = module.exports = koa(),
    path = require('path');

// Logger
app.use(logger());
// require routes
require('./routes')(app);

// Serve static files
app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());

if (!module.parent) {
  app.listen(9000);
  console.log('listening on port 9000');
}

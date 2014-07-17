'use strict';
module.exports = function(app) {
  var messages = require('./controllers/messages'),
      route = require('koa-route'),
      path = require('path');

  app.use(route.get('/', messages.home));
  app.use(route.get('/messages', messages.list));
  app.use(route.get('/messages/:id', messages.fetch));
  app.use(route.post('/messages', messages.create));
  app.use(route.get('/async', messages.delay));
};

'use strict';
var messages = require('./controllers/messages'),
    route = require('koa-route'),
    koa = require('koa'),
    path = require('path'),
    app = module.exports = koa();

app.use(route.get('/', messages.home));
app.use(route.get('/messages', messages.list));
app.use(route.get('/messages/:id', messages.fetch));
app.use(route.post('/messages', messages.create));
app.use(route.get('/async', messages.delay));

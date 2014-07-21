'use strict';
var views = require('co-views');
var parse = require('co-body');

var db = require('monk')('localhost/koaDemo');
var wrap = require('co-monk');
var messages = wrap(db.get('messages'));

var render = views(__dirname + '/../views', {
  map: { html: 'swig' }
});

module.exports.home = function *home() {
  this.body = yield render('list', { 'messages': (yield messages.find({})) });
};

module.exports.list = function *list() {
  this.body = yield messages.find({});
};

module.exports.fetch = function *fetch(id) {
  var message = messages[id];
  if (!message) {
    this.throw(404, 'message with id = ' + id + ' was not found');
  }
  this.body = yield message;
};

module.exports.create = function *create() {
  var message = yield parse(this);
  console.log(message);
  message = messages.insert(message);
  this.redirect('/');
};

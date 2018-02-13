'use strict';


var mongoose = require('mongoose'),
  User = mongoose.model('Users'),
  AuthUser = mongoose.model('User');

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.addUser = function(req, res) {
  if (req.body.email &&
  req.body.username &&
  req.body.password &&
  req.body.passwordConf) {
  var userData = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    passwordConf: req.body.passwordConf,
  }
  //use schema.create to insert data into the db
  AuthUser.create(userData, function (err, user) {
    if (err) {
      return next(err)
    } else {
      //console.log("hello");
      return res.redirect('/');
    }
  });
}
}

'use strict';
module.exports = function(app) {
  var userController = require('../controllers/userController');

  // todoList Routes
  app.route('/users')
    .get(userController.list_all_users);

  app.route('/auth').post(userController.addUser);
  };

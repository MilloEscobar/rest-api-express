var courseRouter = require('./courseRouter')('course');
var mailRouter = require('./mailRouter')('mail');
var usersRouter = require('./usersRouter')('users');

module.exports = {
  courseRouter: courseRouter,
  usersRouter : usersRouter,
  mailRouter : mailRouter
};
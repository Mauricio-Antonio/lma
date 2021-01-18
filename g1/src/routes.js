const express = require('express');
const UserController = require('./controllers/UserController');
const CommentController = require('./controllers/CommentController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/comments', CommentController.index);
routes.post('/comments', CommentController.store);

module.exports = routes;
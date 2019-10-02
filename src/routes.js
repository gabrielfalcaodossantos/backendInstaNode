const express = require('express');

const routes = new express.Router();

const PostController = require('./controllers/PostController');

routes.post('/posts', PostController.store) 
routes.get('/posts', PostController.index) 

module.exports = routes;
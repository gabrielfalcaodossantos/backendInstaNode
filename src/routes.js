const express = require('express');
const multer = require('multer');
const routes = new express.Router();

const PostController = require('./controllers/PostController');
const upload = multer();

routes.post('/posts', upload.single('image'), PostController.store)
routes.get('/posts', PostController.index)

module.exports = routes;
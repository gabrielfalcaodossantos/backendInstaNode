const Post = require('../models/Post');

const mongoose = require('mongoose');

module.exports = {

    async index(req, res) {
        return res.json({ ok: true });
    },

    // req.body = contêm informações da requisição
    // req.file = contêm informações do arquivo
    async store(req, res) {
        console.log(req.body);
        return res.json({ ok: true });
    }
}
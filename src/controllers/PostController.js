const Post = require('../models/Post');

const mongoose = require('mongoose');


module.exports = {

    async index(req, res) {
        return res.json({ ok: true });
    },

    async store(req, res) {
        return res.json({ ok: true });
    }
}
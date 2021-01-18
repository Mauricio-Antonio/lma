const Comment = require('../models/Comment');

module.exports = {
    async index(req, res){
        const comments = await Comment.findAll();
        
        return res.json(comments);

    },

    async store(req, res){
        const { opinion } = req.body;

        const comment = await Comment.create({ opinion });

        return res.json(comment);
    }
};
const express = require('express');
const { updateOne } = require('../models/Post');
const Post = require('../models/Post');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch (err){
        res.json({message: err});
    }
});

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description   
    });
    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err =>
        {
            res.json({ message:err });
        });
});

router.get('/:postId', async (req, res) => {
    try{
     const post = await Post.findById(req.params.postId);
     res.json(post);
    }catch(err){
        res.json({message: err});
    }
});
 
router.patch('/:postId', async (req, res) =>
{
    try{
    const updatedPost = await Post.updateOne(
    {_id: req.params.postId}, 
    { $set: {title: req.body.title} }
    );
    res.json(updatedPost);
    } catch (err) {
        res.json({message: err});
    }
});

router.delete('/:postId', async (req, res) => {
    try{
     const removedPost = await Post.remove({_id: req.params.postId});
     res.json(removedPost);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;
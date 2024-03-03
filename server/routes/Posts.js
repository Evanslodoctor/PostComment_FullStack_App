const express = require('express');
const router = express.Router();
const { Posts } = require('../models');

// Selecting everything in the database
router.get('/', async (req, res) => {
  try {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Inserting or updating a record in the database
router.post('/', async (req, res) => {
  try {
    const post = req.body;

    // Check if the record already exists
    const existingPost = await Posts.findOne({ where: { title: post.title } });

    if (existingPost) {
      // If exists, update the record
      await existingPost.update(post);
      res.json(existingPost);
    } else {
      // If not exists, create a new record
      const createdPost = await Posts.create(post);
      res.json(createdPost);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const { Posts } = require('../models'); // Correctly import the Posts model
// Selecting everything in database
router.get('/', async (req, res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
  
});
// inserting to a database
router.post('/', async (req, res) => {
  try {
    const post = req.body;
    await Posts.create(post);
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

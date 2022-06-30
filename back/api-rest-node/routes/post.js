'use strict'

const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

router.post('/newPost', postController.save);
router.delete('/delete/:id', postController.delete);
router.put('/update/:id', postController.update);
// router.get('/show/:id', postController.show);
router.get('/allPosts', postController.allPosts);

module.exports = router;
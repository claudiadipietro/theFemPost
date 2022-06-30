 'use strict'

const validator = require('validator');
const Posts = require('../models/posts');

const controller = {
    save: function(req, res){
        let params = req.body;
        
        let validate_title = !validator.isEmpty(params.title);
        let validate_content = !validator.isEmpty(params.content);
        let validate_category = !validator.isEmpty(params.category);
        let validate_questions = !validator.isEmpty(params.questions);
        let validate_correctAnswers = !validator.isEmpty(params.correctAnswers);
        let validate_answers = !validator.isEmpty(params.answers);

        if (validate_title && validate_content && validate_category && validate_questions && validate_correctAnswers && validate_answers){
            let post = new Posts();
            post.title = params.title;
            post.content = params.content;
            post.category = params.ategory;
            post.questions = params.questions;
            post.correctAnswers = params.correctAnswers;
            post.answers = params.answers;

            post.save((err, postStored)=> {
                if(err){
                    return res.status(500).send({
                        message: 'Failure saving the post'
                    });
                }
                if (!postStored){
                    return res.status(400).send({
                        message: 'Failure saving the post'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    post: postStored
                })
            })
        }

       
    },
    
    allPosts: function(req, res){
        return Posts.find().then((data) => res.json(data)).catch((error) => res.json({message: error}));
    },
    
    delete: function(req, res){
        const postId = req.params.id;
        Posts.findOneAndDelete({_id: postId}, (postRemoved) => {
            return res.status(200).send({
                status:'success',
                post:postRemoved
            });
        });
    },

    update: function(req, res){
        const postId = req.params.id;
        let params = req.body;
            var update = {
                title: params.title,
                content: params.content,
                category: params.category,
                questions: params.questions,
                correctAnswers: params.correctAnswers,
                answers: params.answers
            };

            Posts.findOneAndUpdate({_id: postId}, update, {new:true}, (err, postUpdated) => {
                return res.status(200).send({
                    status: 'success',
                    post: postUpdated
                });
                
            });
        }
    };
module.exports = controller;
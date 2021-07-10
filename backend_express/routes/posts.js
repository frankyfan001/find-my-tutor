/* eslint-disable */
var express = require('express');
var router = express.Router();
const Post = require('../models/post');

/* Get all posts with its account info. */
router.get('/', function(req, res, next) {
  const output = {
    success: true,
    result: [
      {
        availableDays: [
          false,
          false,
          false,
          false,
          false,
          true,
          true
        ],
        _id: "60e90da5ba03370cfb51c016",
        school: "UBC",
        course: "CPSC 455",
        wage: 30,
        thumbUp: 20,
        phone: "604-999-8407",
        email: "frankyfan003@gmail.com",
        description: "Hi, my name is Franky, majoring Computer Science from UBC.",
        account_ref: {
          _id: "60e90da5ba03370cfb51c00f",
          type: "tutor",
          username: "frankyfan",
          password: "123456",
          fname: "Franky",
          lname: "Fan",
          avatar: "https://cdn.shopify.com/s/files/1/2123/8425/products/76678823-LRG_e1939e5f-7238-46e4-a7c7-eb6d0d26b6d6_530x.jpg?v=1578663470",
          __v: 0,
          createdAt: "2021-07-10T03:01:57.767Z",
          updatedAt: "2021-07-10T03:01:57.767Z"
        },
        createdAt: "2021-07-04T10:03:23.308Z",
        __v: 0,
        updatedAt: "2021-07-10T03:01:57.928Z"
      },
      {
        availableDays: [
          false,
          false,
          false,
          false,
          false,
          true,
          true
        ],
        _id: "60e90da5ba03370cfb51c017",
        school: "UBC",
        course: "ECON 311",
        wage: 20,
        thumbUp: 10,
        phone: "604-999-8407",
        email: "frankyfan@gmail.com",
        description: "Hi, my name is Franky, and I'm good at Economics.",
        account_ref: {
          _id: "60e90da5ba03370cfb51c00f",
          type: "tutor",
          username: "frankyfan",
          password: "123456",
          fname: "Franky",
          lname: "Fan",
          avatar: "https://cdn.shopify.com/s/files/1/2123/8425/products/76678823-LRG_e1939e5f-7238-46e4-a7c7-eb6d0d26b6d6_530x.jpg?v=1578663470",
          __v: 0,
          createdAt: "2021-07-10T03:01:57.767Z",
          updatedAt: "2021-07-10T03:01:57.767Z"
        },
        createdAt: "2021-07-03T10:03:23.308Z",
        __v: 0,
        updatedAt: "2021-07-10T03:01:57.928Z"
      },
      {
        availableDays: [
          false,
          true,
          false,
          true,
          false,
          false,
          false
        ],
        _id: "60e90da5ba03370cfb51c018",
        school: "SFU",
        course: "CMPT 225",
        wage: 25,
        thumbUp: 15,
        phone: "604-123-456",
        email: "brookxiao@gmail.com",
        description: "I can teach CMPT 225.",
        account_ref: {
          _id: "60e90da5ba03370cfb51c010",
          type: "tutor",
          username: "brookxiao",
          password: "123456",
          fname: "Brook",
          lname: "Xiao",
          avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_sWz-dVuWRkPuUbY9_660qV8YPKIjD8_PoQ&usqp=CAU",
          __v: 0,
          createdAt: "2021-07-10T03:01:57.767Z",
          updatedAt: "2021-07-10T03:01:57.767Z"
        },
        createdAt: "2021-07-02T10:03:23.308Z",
        __v: 0,
        updatedAt: "2021-07-10T03:01:57.928Z"
      },
      {
        availableDays: [
          false,
          true,
          false,
          true,
          false,
          false,
          false
        ],
        _id: "60e90da5ba03370cfb51c019",
        school: "SFU",
        course: "BIOL 100",
        wage: 15,
        thumbUp: 5,
        phone: "604-123-456",
        email: "brookxiao@gmail.com",
        description: "I can teach BIOL 110.",
        account_ref: {
          _id: "60e90da5ba03370cfb51c010",
          type: "tutor",
          username: "brookxiao",
          password: "123456",
          fname: "Brook",
          lname: "Xiao",
          avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_sWz-dVuWRkPuUbY9_660qV8YPKIjD8_PoQ&usqp=CAU",
          __v: 0,
          createdAt: "2021-07-10T03:01:57.767Z",
          updatedAt: "2021-07-10T03:01:57.767Z"
        },
        createdAt: "2021-07-01T10:03:23.308Z",
        __v: 0,
        updatedAt: "2021-07-10T03:01:57.928Z"
      }
    ]
  };
  const output1 = {
    success: false,
    error: "Getting all posts failed."
  };
  ///////////////////////////// Above is examples of input and output /////////////////////////////

  Post.find({})
    .populate('account_ref')
    .sort({createdAt: -1})
    .exec()
    .then((result) => {
      res.send({
        success: true,
        result: result
      });
    })
    .catch((err) => {
      res.send({
        success: false,
        error: "Getting all posts failed."
      });
      console.log(err);
    });
});

/* Get a post with its account info. */
router.get('/:postId', function(req, res, next) {
  const output = {
    success: true,
    result: {
      availableDays: [
        false,
        false,
        false,
        false,
        false,
        true,
        true
      ],
      _id: "60e90da5ba03370cfb51c016",
      school: "UBC",
      course: "CPSC 455",
      wage: 30,
      thumbUp: 20,
      phone: "604-999-8407",
      email: "frankyfan003@gmail.com",
      description: "Hi, my name is Franky, majoring Computer Science from UBC.",
      account_ref: {
        _id: "60e90da5ba03370cfb51c00f",
        type: "tutor",
        username: "frankyfan",
        password: "123456",
        fname: "Franky",
        lname: "Fan",
        avatar: "https://cdn.shopify.com/s/files/1/2123/8425/products/76678823-LRG_e1939e5f-7238-46e4-a7c7-eb6d0d26b6d6_530x.jpg?v=1578663470",
        __v: 0,
        createdAt: "2021-07-10T03:01:57.767Z",
        updatedAt: "2021-07-10T03:01:57.767Z"
      },
      createdAt: "2021-07-04T10:03:23.308Z",
      __v: 0,
      updatedAt: "2021-07-10T03:01:57.928Z"
    }
  };
  const output1 = {
    success: false,
    error: "Getting the post with id 60e8de49309223054b7cd3bb failed.."
  };
  ///////////////////////////// Above is examples of input and output /////////////////////////////

  const postId = req.params.postId;

  Post.findById(postId)
    .populate('account_ref')
    .exec()
    .then((result) => {

      if (result) {
        res.send({
          success: true,
          result: result
        });
      } else {
        res.send({
          success: false,
          error: `Getting the post with id ${postId} failed.`
        });
      }

    })
    .catch((err) => {
      res.send({
        success: false,
        error: `Getting the post with id ${postId} failed.`
      });
      console.log(err);
    });
});

module.exports = router;

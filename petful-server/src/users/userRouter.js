const express = require('express');
const { userQ } = require('../store');

const userRouter = express.Router();
const jsonParser = express.json();


userRouter
  .route('/')
  // .get((req, res) => {
  //   let allUsers = userQ;
  //   res.json(userQ);
  // })
  .post(jsonParser, (req, res, next) => {
    const { name } = req.body;
    if(name === null){
      return res.status(400).json({
        error: 'Must include a name'
      });
    }
    userQ.enqueue(name);
    res.status(201).json(userQ);
  });

module.exports = userRouter;
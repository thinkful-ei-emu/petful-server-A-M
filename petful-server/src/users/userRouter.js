const express = require('express');
const { userQ } = require('../store');

const userRouter = express.Router();
const jsonParser = express.json();


userRouter
  .route('/user')
  .post(jsonParser, (req, res, next) => {
    const { name } = req.body;
    const newCustomer = { name }; 
    if(name === null){
      return res.status(400).json({
        error: 'Must include a name'
      });
    }
    userQ.enqueue(newCustomer)
      .then(user => {
        res
          .status(201)
          .json(userQ);
      });
  });
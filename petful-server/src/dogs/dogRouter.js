const express = require('express');
const { dogQ } = require('../store');

const dogRouter = express.Router();

dogRouter
  .route('/')
  .get((req,res) => {
    let nextDog = dogQ.dequeue();
    if(nextDog === undefined){
      res.send('No more dogs to be adpoted');
    }
    res.json(nextDog);
  });

module.exports = dogRouter;
const express = require('express');
const { dogQ } = require('../store');

const dogRouter = express.Router();

dogRouter
  .route('/')
  .get((req,res) => {
    let displayDog = dogQ.first.value;
    console.log(displayDog);
    if(displayDog === undefined){
      res.send('No more cats to be adopted');
    }
    res.json(displayDog);
  });

module.exports = dogRouter;
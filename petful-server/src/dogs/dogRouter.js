const express = require('express');
const { dogQ } = require('../store');

const dogRouter = express.Router();

dogRouter
  .route('/')
  .get((req,res) => {

    if(dogQ.first === null){
      res.status(404).send('No more dogs to be adopted');
    }
    else{
      let displayDog = dogQ.first.value;  
      res.json(displayDog); 
    }
   
  });

module.exports = dogRouter;
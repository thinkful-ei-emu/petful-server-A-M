const express = require('express');
const { dogQ } = require('../store');

const dogRouter = express.Router();

dogRouter
  .route('/')
  .get((req,res) => {

    if(dogQ.first === null){
      res.status(404).send({
        error: { message: 'There are no more dogs left to adopt' }
      });
     
    }
    else{
      let displayDog = dogQ.first.value;  
      res.json(displayDog); 
    }
   
  });

module.exports = dogRouter;
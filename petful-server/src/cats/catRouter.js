const express = require('express');
const { catQ, adoptedAnimalsQ } = require('../store');

const catRouter = express.Router();

catRouter
  .route('/')
  .get((req,res) => {
       
    if(catQ.first ===  null){
      res.status(404).send({
        error: { message: 'There are no more cats left to adopt' }
      });
    }
    else{
      let displayCat = catQ.first.value; 
      res.json(displayCat);
    }
   
  });

module.exports = catRouter;
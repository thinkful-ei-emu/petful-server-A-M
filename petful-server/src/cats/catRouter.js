const express = require('express');
const { catQ, adoptedAnimalsQ } = require('../store');

const catRouter = express.Router();

catRouter
  .route('/')
  .get((req,res) => {
       
    if(catQ.first ===  null){
      res.status(404).send('No more cats to be adopted');
    }
    else{
      let displayCat = catQ.first.value; 
      res.json(displayCat);
    }
   
  });

module.exports = catRouter;
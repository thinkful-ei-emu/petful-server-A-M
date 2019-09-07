const express = require('express');
const { catQ, adoptedAnimalsQ } = require('../store');
const adoptCatRouter = express.Router();

adoptCatRouter
  .route('/')
  .get((req,res) => {
    let currentCat = catQ.dequeue();
    if(currentCat){
      adoptedAnimalsQ.push(currentCat);
    }
    
    if(currentCat === undefined){
      res.send('No more cats to be adopted');
    }
    res.json(currentCat);
  });

module.exports = adoptCatRouter;
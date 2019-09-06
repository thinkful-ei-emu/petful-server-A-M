const express = require('express');
const { catQ, adoptedAnimalsQ } = require('../store');

const catRouter = express.Router();

catRouter
  .route('/')
  .get((req,res) => {
    let displayCat = catQ.first.value;
    console.log(displayCat);
    if(displayCat === undefined){
      res.send('No more cats to be adopted');
    }
    res.json(displayCat);
  });

module.exports = catRouter;
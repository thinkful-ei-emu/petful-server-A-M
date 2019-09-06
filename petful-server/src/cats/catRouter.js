const express = require('express');
const { catQ } = require('../store');

const catRouter = express.Router();

catRouter
  .route('/')
  .get((req,res) => {
    let currentCat = catQ.dequeue();
    if(currentCat === undefined){
      res.send('No more cats to be adopted');
    }
    res.json(currentCat);
  });

module.exports = catRouter;
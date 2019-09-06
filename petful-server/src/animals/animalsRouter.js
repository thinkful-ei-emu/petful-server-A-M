const express = require('express');
const { adoptedAnimalsQ } = require('../store');

const animalsRouter = express.Router();

animalsRouter
  .route('/')
  .get((req,res) => {
    let animals = adoptedAnimalsQ;
    return res.json(animals);
  });

module.exports = animalsRouter;
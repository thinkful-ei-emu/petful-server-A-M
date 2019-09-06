const express = require('express');
const { dogs } = require('../store');

const dogRouter = express.Router();

dogRouter
  .route('/')
  .get((req,res) => {
    res.json(dogs);
  });

module.exports = dogRouter;
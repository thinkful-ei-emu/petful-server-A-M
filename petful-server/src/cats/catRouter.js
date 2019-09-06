const express = require('express');
const { cats } = require('../store');

const catRouter = express.Router();

catRouter
  .route('/')
  .get((req,res) => {
    res.json(cats);
  });

module.exports = catRouter;
const express = require('express');
const { cats, nextCat } = require('../store');

const catRouter = express.Router();

catRouter
  .route('/')
  .get((req,res) => {
    res.json(nextCat);
  });

module.exports = catRouter;
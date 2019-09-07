const express = require('express');
const { dogQ, adoptedAnimalsQ } = require('../store');
const adoptDogRouter = express.Router();

adoptDogRouter
  .route('/')
  .get((req,res) => {
    let currentDog = dogQ.dequeue();
    if(currentDog){
      adoptedAnimalsQ.push(currentDog);
    }
    
    if(currentDog === undefined){
      res.send('No more dogs to be adopted');
    }
    res.json(currentDog);
  });

module.exports = adoptDogRouter;
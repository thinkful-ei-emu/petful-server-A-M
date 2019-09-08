const express = require('express');
const { dogQ, adoptedAnimalsQ } = require('../store');
const adoptDogRouter = express.Router();

adoptDogRouter
  .route('/')
  .get((req,res) => {
    let currentDog = dogQ.dequeue();
    dogQ.enqueue({
      imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute dog listening to music 1_1.jpg',
      imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
      name: 'Zeus',
      sex: 'Male',
      age: 3,
      breed: 'Golden Retriever',
      story: 'Owner Passed away'
    });
    dogQ.enqueue({
      imageURL: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/19160330/Havanese-puppy.jpg',
      imageDescription: 'A smiling brown puppy in a field.',
      name: 'Gidget',
      sex: 'Female',
      age: 3,
      breed: 'Havanese',
      story: 'Owner Passed away'
    });
    dogQ.enqueue({
      imageURL: 'https://vetstreet-brightspot.s3.amazonaws.com/cf/d50ed0aec211e088ab0050568d634f/file/Chug-2-645km071411.jpg',
      imageDescription: 'A smiling white coat ready for a walk.',
      name: 'Cedrik',
      sex: 'Male',
      age: 3,
      breed: 'Chihuahua Pug',
      story: 'Owner Passed away'
    });
    if(currentDog){
      adoptedAnimalsQ.push(currentDog);
    }
    
    if(currentDog === undefined){
      res.send('No more dogs to be adopted');
    }
    res.json(currentDog);
  });

module.exports = adoptDogRouter;
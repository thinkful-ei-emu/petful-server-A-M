const express = require('express');
const { catQ, adoptedAnimalsQ } = require('../store');
const adoptCatRouter = express.Router();

adoptCatRouter
  .route('/')
  .get((req,res) => {
    let currentCat = catQ.dequeue();
    catQ.enqueue({
      imageURL:'https://media.mnn.com/assets/images/2018/02/AdorableBlackCatLookingAtCameraFromSofa.jpg.653x0_q80_crop-smart.jpg', 
      imageDescription: 'Black cat lounging on bed.',
      name: 'Momo',
      sex: 'Male',
      age: 0.5,
      breed: 'Bombay',
      story: 'Ready to be adopted'
    });
    catQ.enqueue({
      imageURL:'https://kittentoob.com/wp-content/uploads/2018/01/Mackerel-tabby-750x441.jpg', 
      imageDescription: 'Black and grey getting ready for a cat nap.',
      name: 'Bash',
      sex: 'Male',
      age: 4,
      breed: 'Tabby',
      story: 'Family moved'
    });
    if(currentCat){
      adoptedAnimalsQ.push(currentCat);
    }    
    if(currentCat === undefined){
      res.send('No more cats to be adopted');
    }
    res.json(currentCat);
  });

module.exports = adoptCatRouter;
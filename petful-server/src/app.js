require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const catRouter = require('./cats/catRouter');

const { NODE_ENV } = require('./config');

const app = express();

const morganOptions = (NODE_ENV === 'production')
  ? 'common' 
  : 'dev';

app.use(morgan(morganOptions));
app.use(helmet());
app.use(cors());


app.get('/', (req,res) => {
  res.send('Hello World');
});


let cats=[{
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
}];

app.get('/api/cat', (req,res) => {
  res.json(cats);
});

let dogs = [{
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
}];

app.get('/api/dog', (req,res) => {
  res.json(dogs);
});

app.use(function errorHandler(error, req, res, next) { //eslint-disable-line no-unused-vars
  let response;
  if(NODE_ENV === 'production'){
    response = { error: {message: 'server error'} };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const catRouter = require('./cats/catRouter');
const dogRouter = require('./dogs/dogRouter');
const animalsRouter = require('./animals/animalsRouter');
const adoptCatRouter = require('./adoptCat/adoptCatRouter');
const adoptDogRouter = require('./adoptDog/adoptDogRouter');

const { NODE_ENV, CLIENT_ORIGIN } = require('./config');

const app = express();

const morganOptions = (NODE_ENV === 'production')
  ? 'common' 
  : 'dev';

app.use(morgan(morganOptions));
app.use(helmet());
app.use(cors({
  origin: CLIENT_ORIGIN
}));


app.use('/api/cat', catRouter);
app.use('/api/dog', dogRouter);
app.use('/api/adopt/cat', adoptCatRouter);
app.use('/api/adopt/dog', adoptDogRouter);
app.use('/api/animals', animalsRouter);


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

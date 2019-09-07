# Petful Server

Live App: https://am-petful-client.now.sh/
Server is being hosted using heroku.

Developed by:
Martha Plantz and Ashley Oellbaum

## Summary

Petful is an adoption simulator that allows for you to adopt a pet on a "first come, first served" basis. This means that you must wait until you are first in line to adopt a pet. Similarly, the animals are adopted by the order in which they arrive at FIFO. When it is your turn to adopt, you have a choice of adopting a dog, cat or both animals. Due to our "first-in, first-out" policy, only the animals that have been waiting the longest to be adopted are available for adoption.

## Technologies

Front-end: React, HTML, CSS, Javascript
Backend: Node.js, Express

This application utilizes queue data structures.

## Server Setup

This server includes 5 different end points:
/api/cat
/api/dog
/api/adopt/cat
/api/adopt/dog
/api/animals. 

Each endpoint is setup to respond to GET requests.

To get the first pet in line use: 
  /api/cat
  /api/dog
this will respond with just the pet who is first in line.

To dequeue a pet use:
  /api/adopt/cat
  /api/adopt/dog
this will respond with the pet you dequeued.

To get a list of all adopted pets use:
  /api/animals
this will respond with an array of all the adpoted pets, dogs and cats together.

All response follows the format below
{
  imageURL:'https://kittentoob.com/wp-content/uploads/2018/01/Mackerel-tabby-750x441.jpg', 
  imageDescription: 'Black and grey getting ready for a cat nap.',
  name: 'Bash',
  sex: 'Male',
  age: 4,
  breed: 'Tabby',
  story: 'Family moved'
}

When requesting the adopted pets the response will be an array of objects with the same properties as above. 

## Link to Client Repo

https://github.com/thinkful-ei-emu/Ashley-Martha-Petful-Client

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`
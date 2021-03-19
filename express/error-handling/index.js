const express = require('express');
const morgan = require('morgan');
const app = express();

const AppError = require('./AppError');

app.use(morgan('tiny'));

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  console.log(req.query);
  if (password === 'secretpassword') {
    return next();
  }
  throw new AppError('sorry, you need a password!', 401);
}

app.get('/', (req, res) => {
  res.send('HOME PAGE!');
})

app.get('/cats', (req, res) => {
  res.send('cats meow meoww');
})

app.get('/error', (req, res) => {
  chicken.fly();
})

app.get('/secret', verifyPassword, (req, res) => {
  res.send('My Secret Page!! I am scared of dogs lol');
})

app.get('/admin', (req, res) => {
  throw new AppError('you are not an admin!', 403);
})

app.use((req, res) => {
  res.status(404).send('404 - not found!');
  // throw new AppError('not found!', 404);
})

// app.use((err, req, res, next) => {
//   console.log('*****************');
//   console.log('ERROR');
//   console.log('*****************');
//   // res.status(500).send('oh no, an error!');
//   // default express error handling.
//   next(err);
// })

app.use((err, req, res, next) => {
  // these come from the AppError fields.
  const { status = 500, message = 'Sorry, something went wrong:(' } = err;
  res.status(status).send(message);
})

app.listen(3000, () => {
  console.log('listening on port 3000!');
})

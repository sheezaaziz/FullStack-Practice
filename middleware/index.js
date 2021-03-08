const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny'));

// app.use((req, res) => {
//   res.send('hijacked by my app.use! w.e fcn is put inside app.use will be called for every single request, at least in the way it is set up rn.');
// })
//
// app.use((req, res, next) => {
//   console.log('my first middleware!');
//   return next();
//   console.log('my first middleware after calling next!');
// })
//
// app.use((req, res, next) => {
//   console.log('my second middleware!');
//   return next();
// })

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  console.log(req.query);
  if (password === 'secretpassword') {
    return next();
  }
  res.send('sorry you need a password!');
}

app.get('/', (req, res) => {
  res.send('HOME PAGE!');
})

app.get('/cats', (req, res) => {
  res.send('cats meow meoww');
})

app.get('/secret', verifyPassword, (req, res) => {
  res.send('My Secret Page!! I am scared of dogs lol');
})

app.use((req, res) => {
  res.status(404).send('404 - not found!');
})

app.listen(3000, () => {
  console.log('listening on port 3000!');
})

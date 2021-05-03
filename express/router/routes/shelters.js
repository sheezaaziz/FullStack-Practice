const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('get shelters!');
})

router.post('/', (req, res) => {
  res.send('creating a shelter!');
})

router.get('/:id', (req, res) => {
  res.send('get specific shelter!');
})

router.get('/:id/edit', (req, res) => {
  res.send('editing a shelter!');
})

module.exports = router;

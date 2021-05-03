const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('all dogs!');
})

router.get('/:id', (req, res) => {
  res.send('get specific dog!');
})

router.get('/:id/edit', (req, res) => {
  res.send('editing a dog!');
})

module.exports = router;

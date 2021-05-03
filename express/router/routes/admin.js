const express = require('express');
const router = express.Router();


// must defn middleware here. if defned in index.js then every page wil have 'sorry not an admin'
router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  }
  res.send('sorry not an admin!');
})

router.get('/topsecret', (req, res) => {
  res.send('this is very top secret stuff!!');
})

router.get('/deleteeverything', (req, res) => {
  res.send('deleted everything!');
})

module.exports = router;

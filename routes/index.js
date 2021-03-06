const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { name: 'cory' });
});
router.get('/about', (req, res) => {
  res.render('about');
});
router.get('*', (req, res) => {
  res.render('404');
});

module.exports = router;

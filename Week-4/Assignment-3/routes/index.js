const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/member', (req, res) => {
  res.render('member');
});

module.exports = router;

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home.html');
});

router.get('/member', (req, res) => {
  res.render('member.html');
});

module.exports = router;

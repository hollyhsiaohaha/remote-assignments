const express = require('express');

const router = express.Router();
const assignmentDb = require('../database');
const hashCrypto = require('../crypto');

router.get('/', (req, res) => {
  res.send({ result: 'this is api' });
});

router.get('/all', (req, res) => {
  assignmentDb.getAllUsers()
    .then((result) => res.send(result))
    .catch((error) => console.log(error));
});

router.post('/check_existing_member', (req, res) => {
  const inputEmail = req.body.email;
  const inputPassword = req.body.password;
  function checkMemberExist(member) {
    if (!member) {
      return res.send({ status: 'fail', message: 'member not exist' });
    }
    if (!(member.password_hash === hashCrypto.hash(inputPassword + member.salt))) {
      return res.send({ status: 'fail', message: 'incorrect password' });
    }
    res.cookie('email', inputEmail);
    return res.send({ status: 'ok', message: 'member checked' });
  }

  assignmentDb.getUserByemail(inputEmail)
    .then((result) => checkMemberExist(result))
    .catch((error) => console.log(error));
});

router.post('/create_new_member', (req, res) => {
  const inputEmail = req.body.email;
  const inputPassword = req.body.password;

  function createNewMember(member) {
    if (member) {
      return res.send({ status: 'fail', message: 'this email has already been registered' });
    }

    const salt = hashCrypto.generateSalt();
    const passwordHash = hashCrypto.hash(inputPassword + salt);

    assignmentDb.insertUser(inputEmail, salt, passwordHash)
      .catch((error) => console.log(error));
    res.cookie('email', inputEmail);
    return res.send({ status: 'ok', message: 'member has been created' });
  }

  assignmentDb.getUserByemail(inputEmail)
    .then((result) => createNewMember(result))
    .catch((error) => console.log(error));
});

module.exports = router;

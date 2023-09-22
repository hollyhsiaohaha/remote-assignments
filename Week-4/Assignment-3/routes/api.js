const express = require('express');

const router = express.Router();
const controller = require('../controller/controller');

router.get('/', (req, res) => {
  res.send({ result: 'this is api' });
});

router.get('/all', async (req, res) => {
  try {
    const result = await controller.getAllMember();
    return res.send(result);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error of API: /all -> ${error}` });
  }
});

router.post('/check_existing_member', async (req, res) => {
  try {
    const result = await controller.checkMemberExist(req.body.email, req.body.password);
    if (result.status === 'ok') res.cookie('email', req.body.email);
    return res.send(result);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error of API: /check_existing_member -> ${error}` });
  }
});

router.post('/create_new_member', async (req, res) => {
  try {
    const result = await controller.createNewMember(req.body.email, req.body.password);
    if (result.status === 'ok') res.cookie('email', req.body.email);
    return res.send(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error of API: /create_new_member -> ${error}` });
    return Promise.reject();
  }
});

module.exports = router;

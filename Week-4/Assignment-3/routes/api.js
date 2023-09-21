const express = require('express');

const router = express.Router();
const controller = require('../controller/controller');

router.get('/', (req, res) => {
  res.send({ result: 'this is api' });
});

router.get('/all', async (req, res) => {
  const result = await controller.getAllMember();
  return res.send(result);
});

router.post('/check_existing_member', async (req, res) => {
  const result = await controller.checkMemberExist(req.body.email, req.body.password);
  if (result.status === 'ok') res.cookie('email', req.body.email);
  return res.send(result);
});

router.post('/create_new_member', async (req, res) => {
  const result = await controller.createNewMember(req.body.email, req.body.password);
  if (result.status === 'ok') res.cookie('email', req.body.email);
  return res.send(result);
});

module.exports = router;

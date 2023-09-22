const hashCrypto = require('./crypto');
const model = require('../model/model');

async function getAllMember() {
  const allMembers = await model.getAllUsers();
  return (allMembers);
}

async function checkMemberExist(inputEmail, inputPassword) {
  if (!inputEmail || !inputPassword) {
    return { status: 'fail', message: 'email and password should not be empty' };
  }

  const member = await model.getUserByemail(inputEmail);

  if (!member) {
    return { status: 'fail', message: 'member not exist' };
  }
  if (!(member.password_hash === hashCrypto.hash(inputPassword + member.salt))) {
    return { status: 'fail', message: 'incorrect password' };
  }
  return { status: 'ok', message: 'member checked' };
}

async function createNewMember(inputEmail, inputPassword) {
  if (!inputEmail || !inputPassword) {
    return { status: 'fail', message: 'email and password should not be empty' };
  }
  const member = await model.getUserByemail(inputEmail);
  const salt = hashCrypto.generateSalt();
  const passwordHash = hashCrypto.hash(inputPassword + salt);

  if (member) {
    return { status: 'fail', message: 'this email has already been registered' };
  }

  await model.insertUser(inputEmail, salt, passwordHash);
  return { status: 'ok', message: 'member has been created' };
}

module.exports = {
  getAllMember,
  checkMemberExist,
  createNewMember,
};

const crypto = require('crypto');

function generateSalt() {
  return crypto.randomBytes(16).toString('base64');
}

function hash(string) {
  return crypto.createHash('sha256').update(string).digest('hex');
}

// console.log(hash('aaab'));

module.exports = {
  generateSalt,
  hash,
};

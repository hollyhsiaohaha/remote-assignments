// eslint-disable-next-line import/no-extraneous-dependencies
const mysql = require('mysql2');
// eslint-disable-next-line import/no-extraneous-dependencies
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}).promise();

async function getAllUsers() {
  const [rows] = await pool.query('SELECT * FROM user');
  return rows;
}

async function getUserById(id) {
  const [rows] = await pool.query('SELECT * FROM user WHERE id = ?', [id]);
  return rows[0];
}

async function getUserByemail(email) {
  const [rows] = await pool.query('SELECT * FROM user WHERE email = ?', [email]);
  return rows[0];
}

async function insertUser(email, password) {
  const [result] = await pool.query(
    'INSERT INTO user (email, password) VALUE (?, ?)',
    [email, password],
  );
  return getUserById(result.insertId);
}
// getAllUsers()
//   .then(result => console.log(result));
// checkPasswordByemail('ae.log(result));

module.exports = {
  getAllUsers,
  getUserById,
  getUserByemail,
  insertUser,
};

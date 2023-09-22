/* eslint-disable no-unused-vars */

const message = document.getElementById('msg');

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return '';
}

function logout(event) {
  document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  window.location.href = '/';
}

message.innerText = `email: ${getCookie('email')}`;

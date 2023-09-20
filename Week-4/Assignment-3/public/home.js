/* eslint-disable no-unused-vars */

function login(event) {
  event.preventDefault();

  const emailElem = document.getElementById('login-email');
  const passwordElem = document.getElementById('login-password');
  const messageElem = document.getElementById('msg');
  const params = new URLSearchParams();

  params.append('email', emailElem.value);
  params.append('password', passwordElem.value);

  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params,
  };

  if (!emailElem.value || !passwordElem.value) {
    messageElem.innerText = 'Login error: email and password should not be empty';
    return;
  }

  fetch('/api/check_existing_member', config)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === 'ok') {
        window.location.href = '/member';
      } else {
        messageElem.innerText = `Login error: ${data.message}`;
      }
    })
    .catch((error) => { console.log('Something went wronog: ', error); });
}

function logup(event) {
  event.preventDefault();

  const emailElem = document.getElementById('logup-email');
  const passwordElem = document.getElementById('logup-password');
  const messageElem = document.getElementById('msg');
  const params = new URLSearchParams();

  params.append('email', emailElem.value);
  params.append('password', passwordElem.value);

  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params,
  };

  if (!emailElem.value || !passwordElem.value) {
    messageElem.innerText = 'Logup error: email and password should not be empty';
    return;
  }

  fetch('/api/create_new_member', config)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === 'ok') {
        window.location.href = '/member';
      } else {
        messageElem.innerText = `Logup error: ${data.message}`;
      }
    })
    .catch((error) => { console.log('Something went wronog: ', error); });
}

/* eslint-disable no-unused-vars */

async function fetchData(url, config) {
  const response = await fetch(url, config);
  const data = response.json();
  return (data);
}

async function login(event) {
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
  const data = await fetchData('/api/check_existing_member', config);
  console.log(data);
  if (data.status === 'ok') window.location.href = '/member';
  else messageElem.innerText = `Login error: ${data.message}`;

  /* TODO: 是否可做 error handling，若有 error 則導到 error page 並顯示錯誤代碼及 message？
      試過/思考過以下方法，但目前都沒成功：
      1. 使用 try...catch 將 25-28 行包起來，但發現當 fetchData() 失敗時，也不會掉進 catch 裡
      2. 官方或網路上的 error handling 都在 router 與 app 裡面做， 但 call api 會在前端 call，
          想知道為何不是在這裡處理 error？
          https://expressjs.com/en/guide/error-handling.html
  */
}

async function logup(event) {
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

  const data = await fetchData('/api/check_existing_member', config);
  console.log(data);
  if (data.status === 'ok') window.location.href = '/member';
  else messageElem.innerText = `Logup error: ${data.message}`;
}

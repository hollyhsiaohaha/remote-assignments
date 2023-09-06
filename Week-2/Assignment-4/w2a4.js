// Method1: using banner and button as event target (querySelector)
// const banner = document.querySelector('#banner');
// const actionButton = document.querySelector('#action-btn');
//
// banner.addEventListener('click', () => {
//   banner.textContent = 'Have a Good Time!';
// });
//
// actionButton.addEventListener('click', () => {
//   const secondContent = document.querySelector('#second-content');
//   secondContent.classList.remove('hide');
// });

// Method2: using windows.document as event target (Event bubbling)
document.addEventListener('click', (event) => {
  const { target } = event;
  if (target.id === 'action-btn') {
    const secondContent = document.querySelector('#second-content');
    secondContent.classList.remove('hide');
  } else if (target.id === 'banner') {
    target.textContent = 'Have a Good Time!';
  }
  console.log(target.id);
});

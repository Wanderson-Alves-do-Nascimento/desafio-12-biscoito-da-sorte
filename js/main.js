
const closedCookie = document.querySelector('.closed-cookie');
const openedCookie = document.querySelector('.opened-cookie');
const button = document.querySelector('button');

closedCookie.querySelector('img').addEventListener('click', openCookie);

button.addEventListener('click', openCookie)
function openCookie(){
  closedCookie.classList.toggle('hide');
  openedCookie.classList.toggle('hide');
};
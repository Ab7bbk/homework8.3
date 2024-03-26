const containerElem = document.querySelector('.container');
const leftDoorElem = document.querySelector('.left');
const rightDoorElem = document.querySelector('.right');

containerElem.addEventListener('click', () => {
  leftDoorElem.classList.toggle('active');
  rightDoorElem.classList.toggle('active');
});

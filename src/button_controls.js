const startButton = document.querySelector('.start');

startButton.addEventListener('touchstart', function () {
  startButton.style.border = '10px solid red';
  startButton.style.boxShadow = 'inset 0 0 0.5rem black';
  startButton.style.color = 'red';
});

startButton.addEventListener('touchend', function () {
  startButton.style.border = '10px solid transparent';
  startButton.style.boxShadow = 'none';
  startButton.style.color = 'black';
});

startButton.addEventListener('touchstart', function () {
  startButton.style.transform = 'scale(0.9)';
});

startButton.addEventListener('touchend', function () {
  startButton.style.transform = 'scale(1)';
});

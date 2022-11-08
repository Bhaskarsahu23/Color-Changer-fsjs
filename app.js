const canvas = document.getElementById('canvas');
const button = document.getElementById('button');

button.addEventListener('click', () => {
  let hexList = '0123456789abcdef';
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hexList[Math.floor(Math.random() * 16)];
  }
  canvas.style.backgroundColor = hexColor;
});

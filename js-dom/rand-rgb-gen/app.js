// get DOM elements.
const btn = document.querySelector('button');
const body = document.querySelector('body');
const rgbText = document.querySelector('#rgb-text');

btn.addEventListener('click', () => {
  // Create random body background colour.
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  rgb = `rgb(${r}, ${g}, ${b})`;

  // Change body background color + text.
  body.style.background = rgb;
  rgbText.innerText = rgb;
});

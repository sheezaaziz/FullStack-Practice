// get DOM elements.
const btn = document.querySelector('button');
const body = document.querySelector('body');
const rgbText = document.querySelector('#rgb-text');

const makeRandColor = () => {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
}

btn.addEventListener('click', () => {
  rgb = makeRandColor();
  // Change body background color + text.
  body.style.background = rgb;
  rgbText.innerText = rgb;
});

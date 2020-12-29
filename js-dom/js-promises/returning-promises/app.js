const delayedColourChange = (colour, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = colour;
      resolve();
    }, delay);
  });
}

delayedColourChange('red', 1000)
  .then(() => delayedColourChange('orange', 1000))
  .then(() => delayedColourChange('yellow', 1000))
  .then(() => delayedColourChange('green', 1000))
  .then(() => delayedColourChange('blue', 1000))
  .then(() => delayedColourChange('indigo', 1000))
  .then(() => delayedColourChange('violet', 1000))

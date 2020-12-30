const delayedColourChange = (colour, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = colour;
      resolve();
    }, delay);
  });
}
// equivalent to rainbow() fcn.
// delayedColourChange('red', 1000)
//   .then(() => delayedColourChange('orange', 1000))
//   .then(() => delayedColourChange('yellow', 1000))
//   .then(() => delayedColourChange('green', 1000))
//   .then(() => delayedColourChange('blue', 1000))
//   .then(() => delayedColourChange('indigo', 1000))
//   .then(() => delayedColourChange('violet', 1000))

rainbow = async () => {
  await delayedColourChange('red', 1000);
  await delayedColourChange('orange', 1000);
  await delayedColourChange('yellow', 1000);
  await delayedColourChange('green', 1000);
  await delayedColourChange('blue', 1000);
  await delayedColourChange('indigo', 1000);
  await delayedColourChange('violet', 1000);
  return "All Done! 💰";
}

printRainbow = async () => {
  try {
    return await rainbow();
    console.log("The end");
  } catch (err) {
    console.log("error!: ", err);
  }
}

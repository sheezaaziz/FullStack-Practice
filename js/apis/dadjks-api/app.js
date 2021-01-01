const jokes = document.querySelector('#jokes');
const joke_generator = document.querySelector('#joke_generator');

const addDadJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement('LI');
  newLI.append(jokeText);
  jokes.append(newLI);
}

const getDadJoke = async () => {
  try {
    const config = { headers: {Accept: 'application/json'} };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return await res.data.joke;
  } catch(err) {
    return `Sorry! No jokes available at the moment due to: ${err}`;
  }
}

joke_generator.addEventListener('click', addDadJoke);
// console.log(getDadJoke()); // this will give us the 'Promise' obj bc we getDadJoke is an async fcn which returns a promise. if it wasn't async then we could not use await and res could be undefined. So to console log a joke we need to put 'console.log(await getDadJoke())' in an async fcn such as addDadJoke.

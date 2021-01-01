// to make your own package.json file, need to enter 'npm init' in bash. this file will update as you add more dependencies to your project. note it does not update when you remove a depency from the project.
// if you are in a directory w a package.json file and enter 'npm install' in bash then it will look for a package.json file and download all the listed dependencies in their respected versions.

const jokes = require('give-me-a-joke');
const colours = require('colors');

jokes.getRandomDadJoke((joke) => {
  console.log(joke.rainbow);
});

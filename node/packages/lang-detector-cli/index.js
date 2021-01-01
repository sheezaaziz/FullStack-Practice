const process = require('process');
const franc = require('franc');
const langs = require('langs');
const colours = require('colors');

// Get user text from terminal.
let args = process.argv.slice(2);
let userText = ''
for (let i = 0; i < args.length; i++) {
  userText += ' ' + args[i];
}

getLanguage = () => {
  iso_code = franc(userText);
  if (iso_code != 'und' && langs.where("3", iso_code)) {
    userLang = langs.where("3", iso_code).name;
    return userLang.inverse;
  }
  return "Sorry, we could not detect a language for the inputted text.".red;
}

try {
  console.log(getLanguage());
} catch (err) {
  console.log("oh no, unfortunately there was an error detected: ", err);
}

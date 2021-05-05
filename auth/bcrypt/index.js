const bcrypt = require('bcrypt');

const hashPassword = async(pw) => {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(pw, salt);
}

const hashPasswordv2 = async(pw) => {
  const hash = await bcrypt.hash(pw, 12);
}

const login = async(pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashedPw);
  if (result) {
    console.log('successfully logged in!');
  } else {
    console.log('incorrect credentials.');
  }
}

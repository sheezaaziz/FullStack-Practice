const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (password !== 'catsarecute') throw "Invalid Password";
  return `Welcome ${username}!`;
}

login('Sheeza', 'catsarecute')
  .then(msg => {
    console.log("Logging in..");
    console.log(msg);
  })
  .catch(err => {
    console.log("Experiencing difficulties..");
    console.log(err);
  })
// login('NotSheeza', 'catsareannoying')

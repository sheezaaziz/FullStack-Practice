const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDBDemo', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("connected!");
  })
  .catch((err) => {
    console.log("oh no, an error!: ", err);
  })

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  addresses: [
    {
      _id: { id: false },
      street: String,
      city: String,
      state: String,
      country: String
    }
  ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async() => {
  const u = new User({
    first: 'Harry',
    last: 'Potter',
  })
  u.addresses.push({
    street: 'hogwarts',
    city: 'dne',
    state: 'magic',
    country: 'uk',
  })
  const res = await u.save();
  console.log(res);
}

makeUser();

const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDBDemo', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("connected!");
  })
  .catch((err) => {
    console.log("oh no, an error!: ", err);
  })

const userSchema = new Schema({
  username: String,
  age: Number,
})

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async() => {
//   // const u = new User({ username: 'chickenluvr', age: 61 });
//   const u = await User.findOne({ username: 'chickenluvr' });
//   // const tweet1 = new Tweet({ text: 'winner winner chicken dinner', likes: 0 });
//   const tweet2 = new Tweet({ text: 'i love my chicken family!', likes: 2 });
//   // tweet1.user = u;
//   tweet2.user = u;
//   // u.save();
//   // tweet1.save();
//   tweet2.save();
// }
//
// makeTweets();

const findTweet = async() => {
  // for populate we put the name of the field, not the name of the model, that we want to populate.
  const t = await Tweet.find({}).populate('user', 'username');
  console.log(t);
}

findTweet();

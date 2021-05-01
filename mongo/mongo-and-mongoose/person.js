const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/storeApp', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("connected!");
  })
  .catch((err) => {
    console.log("oh no, an error!: ", err);
  })

const personSchema = new mongoose.Schema({
  first: String,
  last: String
});

personSchema.virtual('fullName').get(function() {
  return `${this.first} ${this.last}`;
})

personSchema.virtual('fullName').set(function(newFullName) {
  newName = newFullName.split(' ');
  this.first = newName[0];
  this.last = newName[1];
})

// middleware
personSchema.pre('save', async function() {
  this.first = 'mama';
  this.last = 'mia';
  console.log('about to save.. promise (hah) ;)');
})

personSchema.post('save', async function() {
  console.log('just saved!! 😎💅');
})

const Person = mongoose.model('Person', personSchema);

const sheeza = new Person({first: 'Sheeza', last: 'Aziz'});
console.log(sheeza.fullName);
sheeza.fullName = 'Sheeza Qureshi';
console.log(sheeza.fullName);
sheeza.save().then(res => console.log(res));

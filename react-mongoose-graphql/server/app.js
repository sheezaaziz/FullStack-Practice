// package imports
const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const cors = require('cors')
require('dotenv').config();
// project imports
const schema = require('./schema/schema');
const uri = `mongodb+srv://sheezaaziz:${process.env.DBPASSWORD}@cluster0.9uok9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// connect to db
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('connected to db');
});

app.use(cors()) // to allow cross-origin requests
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000, () =>{
  console.log('listening on port 3000');
});

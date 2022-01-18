const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema.js");
const { Query } = require("./resolvers/Query.js");
const { Mutation } = require("./resolvers/Mutation.js");
const { Category } = require("./resolvers/Category.js");
const { Product } = require("./resolvers/Product.js");
const { db } = require("./db.js");

// gql scalar types: String, Int, Float, Boolean, ID!
// ! = required

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Category,
    Product,
  },
  context: {
    db
  },
});

server.listen().then(({ url }) => {
  console.log("server is ready at ", url);
});

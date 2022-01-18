const { ApolloServer, gql  } = require('apollo-server');

// gql scalar types: String, Int, Float, Boolean, ID!
// ! = required

const typeDefs = gql`
    type Query {
        hello: String!
        numberOfAnimals: Int
        price: Float
        isCool: Boolean
        names: [String!]
    }
`;

const resolvers = {
    Query: {
        hello: () => {
            return "world!";
        },
        numberOfAnimals: () => {
            return 33;
        },
        price: () => {
            return 3.33;
        },
        isCool: () => {
            return false;
        },
        names: () => {
            return ["s", "a"];
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log('server is ready at ', url);
})
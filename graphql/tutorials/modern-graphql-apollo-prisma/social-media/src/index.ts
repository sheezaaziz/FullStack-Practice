import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { Query, Mutation } from "./resolvers";
import { PrismaClient, Prisma } from "@prisma/client";
// Prisma terminal cmds (note since this is a js project we must prefix all cmds with 'npx'):
// $ prisma init (Setup a new Prisma project)
// $ prisma db push (Push the Prisma schema state to the database)
// $ prisma studio (Browse your data on web)

// Node terminal cmds:
// $ nodemon index.ts (Browse your data on Apollo GraphQL server)
// $ npm run start:dev (Browse your data on Apollo GraphQL server)

const prisma = new PrismaClient();

export interface Context {
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>
}


const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation
    },
    context: ({ req }) => {
        return {
            prisma
        }
    }
});

server.listen().then(({ url }) => {
    console.log(`🚀 server ready on ${url}`);
})
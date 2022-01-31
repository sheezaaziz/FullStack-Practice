import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { Query, Mutation, Profile, Post, User } from "./resolvers";
import { PrismaClient, Prisma } from "@prisma/client";
import { getUserFromToken } from "./utils/getUserFromToken";
// Prisma terminal cmds (note since this is a js project we must prefix all cmds with 'npx'):
// $ prisma init (Setup a new Prisma project)
// $ prisma db push (Push the Prisma schema state to the database)
// $ prisma studio (Browse your data on web)

// Node terminal cmds:
// $ nodemon index.ts (Browse your data on Apollo GraphQL server)
// $ npm run start:dev (Browse your data on Apollo GraphQL server)

export const prisma = new PrismaClient();

export interface Context {
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>
    userInfo: {
        userId: number
    } | null
}


const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
        Profile,
        Post,
        User,
    },
    context: async ({ req }: any): Promise<Context> => {
        const userInfo = await getUserFromToken(req.headers.authorization)
        return {
            prisma,
            userInfo,
        }
    }
});

server.listen().then(({ url }) => {
    console.log(`🚀 server ready on ${url}`);
})
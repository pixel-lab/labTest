import { GraphQLServer } from 'graphql-yoga'

//two main things for Graphql-yoga 1. typeDefs 2. resolver

const typeDefs  =`
    type Query {
        hello: String!,
        name: String!
    }
`

const resolvers = {
    Query:{
        hello()  {
            return 'Hello World'
        },
        name() {
            return 'Sankha Banerjee'
        }
    }
}

const server = new GraphQLServer({
    typeDefs,resolvers
});

server.start(() => console.log('Running'));
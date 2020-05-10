import { GraphQLServer } from 'graphql-yoga'

//two main things for Graphql-yoga 1. typeDefs 2. resolver

const typeDefs  =`
    type Query {
        title: String!,
        price: Float!,
        rating: Float,
        inStock: Boolean!
    }
`

const resolvers = {
    Query:{
        title()  {
            return 'Tenida Samagra'
        },
        price() {
            return 12.30;
        },
        rating() {
            return 3.05;
        },
        inStock() {
            return false;
        }
    }
}

const server = new GraphQLServer({
    typeDefs,resolvers
});

server.start(() => console.log('Running'));
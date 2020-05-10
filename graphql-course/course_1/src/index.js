import { GraphQLServer } from 'graphql-yoga'

//two main things for Graphql-yoga 1. typeDefs 2. resolver

const typeDefs  =`
    type Query {
        me:user!
    }

    type user {
        id: ID!,
        name: String!,
        email:String!,
        age: Int
    }
`

const resolvers = {
    Query:{
        me(){
            return {
                id:'abc-123-!@#',
                name:'Sankha',
                email:'sankhabanerjee92@gmail.com',
                age:21
            }
        }
    }
}

const server = new GraphQLServer({
    typeDefs,resolvers
});

server.start(() => console.log('Running'));
const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLNonNull} = graphql;

const booklist = [
    {name:'Ashura', id:1, author:'Anand Nilkantha'},
    {name:'Alchemist', id:2, author:'paulo coleho'},
    {name:'Two states', id:3, author:'Chetan Bhagat'}
]

const BookType = new GraphQLObjectType({
    name:'bookType',
    fields: () => ({
        name:{type: GraphQLString},
        gener:{type: GraphQLString},
        id:{type: GraphQLID}
    })
})

const RootQuery = new GraphQLObjectType({
    name:'book',
    fields:{
        book :{
            type:BookType,
            args:{ id:{
               type :GraphQLID}
            },
            resolve(parent,args){
                //codes to be return                
                return booklist[args.id]
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})
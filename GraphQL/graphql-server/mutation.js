let inMemoryStore = {};
const RootMutation = new GraphQLObjectType({
    name: 'RootMutation',
    description: 'The root mutation',
    fields: {
        setNode: {
            type: GraphQLString,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID)
                },
                value: {
                    type: new GraphQLNonNull(GraphQLString),
                }
            },
            resolve(source, args) {
                inMemoryStore[args.key] = args.value;
                return inMemoryStore[args.key];
            }
        }
    }
});
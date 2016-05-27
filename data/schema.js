import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} from 'graphql';

let conunter = 42;

let schema = new GraphQLSchema ({

  query : new GraphQLObjectType({
    name : 'Query',
    fields : () => ({
      conunter : {
        type : GraphQLInt,
        resolve : () => conunter
      },
      message : {
        type : GraphQLString,
        resolve: () => "Hello GraphQL"
      }
    })//end of fields
  }),//end of query
  mutation: new GraphQLObjectType({
    name : 'Mutation',
    fields : () => ({
      increamentCounter : {
        type : GraphQLInt,
        resolve : () => ++conunter
      },
      message : {
        type : GraphQLString,
        resolve: () => "Hello GraphQL"
      }
    })//end of fields
  })//end of mutation
})

export default schema;

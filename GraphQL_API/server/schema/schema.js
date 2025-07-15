#!/usr/bin/node
const {
    graphql,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = require('graphql');

const TaskType = new GraphQLObjectType({
    name: 'Task',
    fields: {
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        weight: { type: GraphQLInt },
        description: { GraphQLString }
    }
})

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        task: {
            type: {type: TaskType },
            args: { type: GraphQLString }
        }
    }
    // add the resolver function here i'm pretty sure
})

module.exports = new GraphQLSchema({
    query: RootQueryType
})
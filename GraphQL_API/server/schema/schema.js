#!/usr/bin/node NEEDS WORK
const {
    graphql,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = require('graphql');

const TaskType = new GraphQLObjectType ({
    name: 'Task',
    fields: {
        id: GraphQLString,
        title: GraphQLString,
        weight: GraphQLInt,
        description: GraphQLString
    }
})
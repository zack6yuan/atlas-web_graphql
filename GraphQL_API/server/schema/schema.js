#!/usr/bin/node
// NEEDS TO ADD GRAPHIQL = TRUE IN THE CONSTRUCTOR
const {
    graphql,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = require('graphql');

const { lodash } = require('lodash')

const TaskType = new GraphQLObjectType({
    name: 'Task',
    fields: {
        id: {
            type: GraphQLString
        },
        title: {
            type: GraphQLString
        },
        weight: {
            type: GraphQLInt
        },
        description: {
            type: GraphQLString
        }
    }
})

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        task: {
            type: TaskType,
            args: {
                type: GraphQLString
            }
        }
    },
    resolve(parent, args) {
        const tasks = [
            {
                id: 1,
                title: `Create your first webpage`,
                weight: 1,
                description: `Create your first HTML file 0-index.html with: -Add the doctype on the first line (without any comment) -After the doctype, open and close an html tag Open your file in your browser (the page should be blank)`
            },
            {
                id: 1,
                title: `Structure your webpage`,
                weight: 1,
                description: `Copy the content of 0-index.html into 1-index.html Create the head and body sections inside the html tag, create the head and body tags (empty) in this order`
            },
        ]
    }
})

module.exports = new GraphQLSchema({
    query: RootQueryType
})
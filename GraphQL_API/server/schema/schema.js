#!/usr/bin/node
// NEED TO ADD GRAPHIQL = TRUE IN THE CONSTRUCTOR
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
        },
    },
    projects: {
        type: TaskType
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
        },
        tasks: {
            type: GraphQLList(TaskType),
            type: GraphQLList(ProjectType)
        },
        projects: {
            type: GraphQLList(TaskType),
            type: GraphQLList(ProjectType)
        },
    },
    resolve: (parent, args) => {
        const tasks = [
            {
                projectID: 1,
                id: 1,
                title: `Create your first webpage`,
                weight: 1,
                description: `Create your first HTML file 0-index.html with: -Add the doctype on the first line (without any comment) -After the doctype, open and close an html tag Open your file in your browser (the page should be blank)`
            },
            {
                projectID: 1,
                id: 1,
                title: `Structure your webpage`,
                weight: 1,
                description: `Copy the content of 0-index.html into 1-index.html Create the head and body sections inside the html tag, create the head and body tags (empty) in this order`
            },
        ]
    }
})

const ProjectType = new GraphQLObjectType({
    name: "Project",
    fields: {
        id: {
            type: GraphQLID
        },
        title: {
            type: GraphQLString
        },
        weight: {
            type: GraphQLInt
        },
        description: {
            type: GraphQLString
        },
    },
    resolve: (parent, args) => {
        const projects = [
            {
                id: 1,
                title: `Advanced HTML`,
                weight: 1,
                description: `Welcome to the Web Stack specialization. The first 3 projects will give you all basic of Web development: HTML, CSS, and Developer tools. In this project, you will learn how to use HTML tags to structure a web page. No CSS, no styling - don't worry, the final page will be "ugly" it's normal, it's not the purpose of this project. Important nodeL details are important! lowercase vs uppercase / wrong letter... be careful!`
            },
            {
                id: 2,
                title: `Bootstrap`,
                weight: 1,
                description: `Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS and JavaScript design templates for typography, forms, buttons, navigation, and other interface components.`
            },
        ]
    }
})

module.exports = new GraphQLSchema({
    query: RootQueryType
})
const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require("mongoose");

const app = express();

app.use('/graphql', graphqlHTTP({
}));
app.listen(4000, () => {
    console.log('now listening for request on port 4000');
});

const mongoAtlasURI = 'mongodb+srv://zack6yuan:maxmrz6GQw47achj@cluster0.0d88jm6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

try {
    mongoose.connect(mongoAtlasUri)
} catch (err) {
    console.error("Could not connect to Mongoose")
}

mongoose.connection.once('open', () =>{
    console.log("connected to database");
    }
);

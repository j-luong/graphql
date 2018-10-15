const express = require('express');
const graphqlHTTP = require('express-graphql');
// construct schema using GraphQL schema language
const schema = require('./src/schemas');
// the root provides a resolver function for each API endpoint
const rootValue = require('./src/resolvers');

const app = express();

app.use('/graphql',
    graphqlHTTP({
        schema,
        rootValue,
        graphiql: true
    })
);

app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');

const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const _ = require('lodash');

// construct schema using GraphQL schema language
const schema = buildSchema(`
    type Query {
        hello(name: String): String,
        rollDice(numDice: Int!, numSides: Int): [Int]
    }
`);

// the root provides a resolver function for each API endpoint
let root = {
    hello: ({ name = 'world' }) => `Hello ${name}`,
    rollDice: ({ numDice, numSides }) => _.times(numDice, () => (1 + Math.floor(Math.random() * (numSides || 6))))
};

const app = express();

app.use('/graphql',
    graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true
    })
);

app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');

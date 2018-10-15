const { buildSchema } = require('graphql');

const queries = `
type Query {
    hello(name: String): String,
    rollDice(numDice: Int!, numSides: Int): [Int]
}
`

module.exports = buildSchema(queries);

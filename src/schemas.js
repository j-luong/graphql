const { buildSchema } = require('graphql');

const schema = `
type Query {
    hello(name: String): String,
    rollDice(numDice: Int!, numSides: Int): [Int]
}
`

module.exports = buildSchema(schema);

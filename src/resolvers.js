const _ = require('lodash');

module.exports = {
    hello: ({ name = 'world' }) => `Hello ${name}`,
    rollDice: ({ numDice, numSides }) => _.times(numDice, () => (1 + Math.floor(Math.random() * (numSides || 6))))
};

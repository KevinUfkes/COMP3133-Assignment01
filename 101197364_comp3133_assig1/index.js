var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(
    `type Query {
             hello: String
             greetings(name: String): String
    }`);

var root = {
    hello: () => 'Hello World!',
    greetings: (args) => {
        return `Hello, ${args.name}`
    },
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,        //Set schema
    rootValue: root, //Set resolver
    graphiql: true             //Client access
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On http://localhost:4000/graphql'));
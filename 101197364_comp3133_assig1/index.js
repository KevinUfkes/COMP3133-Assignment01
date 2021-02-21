var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const bodyParser = require('body-parser');
const TypeDefs = require('./schema.js');
const Resolvers = require('./resolvers');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

var root = {
    hello: () => 'Hello World!',
    greetings: (args) => {
        return `Hello, ${args.name}`
    },
};

const server = new ApolloServer({
    typeDefs: TypeDefs.typeDefs,
    resolvers: Resolvers.resolvers
})

var app = express();
app.use(bodyParser.json());
app.use('*', cors());
server.applyMiddleware({ app });


mongoose.connect('mongodb+srv://KevinUfkes:<password>!@cluster0.gmis5.mongodb.net/comp3133-assignment01?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {npm 
  console.log('Could not connect to the database. Exiting now... ', err);
  process.exit();
});

app.listen(4000, () => console.log('Express GraphQL Server Now Running On http://localhost:4000/graphql'));

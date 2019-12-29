const express = require('express')
const graphqlHTTP = require('express-graphql')

const schema = require('./schema')
const rootValue = require('./root-value')

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}))

app.listen(4000)

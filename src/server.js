import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './server/typeDefs'
import resolvers from './server/resolvers'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

const apollo = new ApolloServer({
  typeDefs,
  resolvers
})

apollo.applyMiddleware({ app })

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})
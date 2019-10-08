import { gql } from 'apollo-server-express'
import bookSchema from './books/bookSchema'
import authorSchema from './authors/authorSchema'
import utilSchema from './utils/utilSchema'

const root = gql`
  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`

const typeDefs = [root, utilSchema, bookSchema, authorSchema]

export default typeDefs
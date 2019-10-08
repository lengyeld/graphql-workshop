import { gql } from 'apollo-server-express'

const bookSchema = gql`
  type Book {
    id: ID,
    title: String,
    author: Author
  }

  input BookInput {
    title: String,
    authorId: ID
  }

  extend type Query {
    books(pagination: Pagination): [Book]
  }

  extend type Mutation {
    updateBook(id: ID!, input: BookInput): Boolean,
    deleteBook(id: ID): Boolean,
    createBook(input: BookInput): Boolean
  }
`

export default bookSchema
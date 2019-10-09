import { gql } from 'apollo-server-express'

const authorSchema = gql`
  type Author {
    id: ID,
    name: String
  }

  extend type Query {
    authors: [Author]
  }
`
export default authorSchema
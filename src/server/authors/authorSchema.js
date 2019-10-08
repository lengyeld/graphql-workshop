import { gql } from 'apollo-server-express'

const authorSchema = gql`
  type Author {
    id: ID,
    name: String
  }
`
export default authorSchema
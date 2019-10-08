import { gql } from 'apollo-server-express'

const utilSchema = gql`
  input Pagination {
    page: Int,
    limit: Int
  }
`

export default utilSchema
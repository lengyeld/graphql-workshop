import { gql } from 'apollo-boost'

export const GET_BOOKS = gql`
  query getBooks($page: Int, $limit: Int) {
    books(pagination: {page: $page, limit: $limit}) {
      total,
      list {
        id,
        title,
        author {
          id,
          name
        }
      }
    }
  }
`

export const UPDATE_BOOK = gql`
  mutation updateBook($id: ID!, $title: String, $authorId: ID) {
    updateBook(id: $id, input: {
      title: $title,
      authorId: $authorId
    })
  }
`

export const DELETE_BOOK = ''

export const CREATE_BOOK = ''
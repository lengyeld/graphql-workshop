import { BookQueries, BookMutations, Book } from './books/bookResolvers'
import { AuthorQueries } from './authors/authorResolvers'

export default {
  Query: {
    ...BookQueries,
    ...AuthorQueries
  },
  Mutation: {
    ...BookMutations
  },
  Book
}
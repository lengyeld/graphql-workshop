import { BookQueries, BookMutations, Book } from './books/bookResolvers'

export default {
  Query: {
    ...BookQueries
  },
  Mutation: {
    ...BookMutations
  },
  Book
}
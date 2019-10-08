import { getBooks, updateBook, deleteBook, createBook } from './bookDao'
import { getAuthor } from '../authors/authorDao'

export const BookQueries = {
  books: (parent, args) => getBooks(args.pagination)
}

export const BookMutations = {
  updateBook: (parent, args) => updateBook(args.id, args.input),
  deleteBook: (parent, args) => deleteBook(args.id),
  createBook: (parent, args) => createBook(args.input)
}

export const Book = {
  author: parent => getAuthor(parent.authorId)
}
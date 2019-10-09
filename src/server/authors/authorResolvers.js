import { getAuthors } from './authorDao'

export const AuthorQueries = {
  authors: () => getAuthors()
}
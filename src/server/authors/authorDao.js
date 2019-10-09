import authors from '../db/authors'

export function getAuthor(id) {
  return authors.find(author => author.id === id)
}

export function getAuthors() {
  return authors
}
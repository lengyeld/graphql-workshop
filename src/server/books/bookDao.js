import books from '../db/books'

export function getBooks(pagination) {
  if (!pagination) {
    return {
      list: books,
      total: books.length
    }
  }

  const { page, limit } = pagination
  const start = (page - 1) * limit
  const end = page * limit
  
  return {
    list: books.slice(start, end),
    total: books.length
  }
}

export function getBook(id) {
  return books.find(book => book.id === id)
}

export function updateBook(id, input) {
  const book = getBook(Number(id))

  book.title = input.title
  book.authorId = Number(input.authorId)

  return true
}

export function deleteBook(id) {
  const index = books.findIndex(book => book.id === Number(id))

  books.splice(index, 1)

  return true
}

export function createBook(input) {
  const maxId = getMaxId()
  const newBook = {
    id: maxId + 1,
    title: input.title,
    authorId: Number(input.authorId)
  }

  books.push(newBook)
  return true
}

function getMaxId() {
  const latestBook = books.reduce((latestBook, book) => {
    return book.id > latestBook.id ? book : latestBook
  })

  return latestBook.id
}
import React, { useEffect, useState } from 'react'
import { PageHeader, Button, message } from 'antd'
import BooksPageContent from './BooksPageContent'
import BookModal from './BookModal'
import useModal from './useModal'

const response = [
  {
    id: 1,
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    releaseDate: 2019
  },
  {
    id: 2,
    title: 'Harry Potter 2',
    author: 'J. K. Rowling',
    releaseDate: 2018
  },
  {
    id: 3,
    title: 'Harry Potter 2',
    author: 'J. K. Rowling',
    releaseDate: 2018
  },
  {
    id: 4,
    title: 'Harry Potter 2',
    author: 'J. K. Rowling',
    releaseDate: 2018
  }
]

const BooksPage = () => {
  const [loading, setLoading] = useState(false)
  const [books, setBooks] = useState([])

  const { visible, modalData, openModal, closeModal, modalLoading, setModalLoading } = useModal()

  const saveBook = () => {
    setModalLoading(true)

    setTimeout(() => {
      setModalLoading(false)
      message.success('Saved successfully')
      closeModal()
    }, 1000)
  }

  const loadMore = () => {
    setLoading(true)

    setTimeout(() => {
      const newBooks = []
      for (let index = 0; index < 4; index++) {
        newBooks.push({
          id: Math.random(),
          title: 'Harry Potter',
          author: 'J. K. Rowling',
          releaseDate: 2019
        })
        
      }
      setBooks(state => [...state, ...newBooks])
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setBooks(response)
      setLoading(false)
    }, 1000);
  }, [])

  return (
    <div className="page">
      <PageHeader title="Books" extra={[<Button type="primary" icon="plus" key="add_button">New Book</Button>]} />

      <BooksPageContent loading={loading} books={books} openModal={openModal} loadMore={loadMore} />

      <BookModal visible={visible} onCancel={closeModal} onOk={saveBook} book={modalData} loading={modalLoading} />
    </div>
  )
}

export default React.memo(BooksPage)
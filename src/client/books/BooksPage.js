import React, { useState, useEffect } from 'react'
import { PageHeader, Button, message } from 'antd'
import BooksPageContent from './BooksPageContent'
import BookModal from './BookModal'
import useModal from '../hooks/useModal'
import usePagination from '../hooks/usePagination'
import { useQuery } from '@apollo/react-hooks'
import { GET_BOOKS } from './bookQueries'

const BooksPage = () => {
  const { visible, modalData, openModal, closeModal } = useModal()
  const { page, limit, changePage } = usePagination(4)

  const { loading, data, refetch } = useQuery(GET_BOOKS, {
    variables: { page, limit }
  })

  const books = data ? data.books.list : []
  const total = data ? data.books.total : 0
  const booksLoading = loading

  const handleSaveBook = () => {
      closeModal()
      message.success('Saved successfully')
      refetch()
  }

  return (
    <div className="page">
      <PageHeader title="Books" extra={[
        <Button type="primary" icon="plus" key="add_button" onClick={() => openModal()}>New Book</Button>
      ]} />

      <BooksPageContent loading={booksLoading} books={books} openModal={openModal} changePage={changePage} pagination={{page, limit, total}} />

      <BookModal
        visible={visible}
        onCancel={closeModal}
        onOk={handleSaveBook}
        book={modalData}
      />
    </div>
  )
}

export default React.memo(BooksPage)
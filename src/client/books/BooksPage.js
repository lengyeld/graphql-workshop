import React from 'react'
import { PageHeader, Button } from 'antd'
import BooksPageContent from './BooksPageContent'
import BookModal from './BookModal'
import useModal from '../hooks/useModal'

const BooksPage = () => {
  const { visible, modalData, openModal, closeModal } = useModal()

  // useQuery
  const books = [{title: "Title", author: {id: 1, name: 'Natalia Orose'}}]
  const booksLoading = false
  const loadMore = () => console.log('load more')

  return (
    <div className="page">
      <PageHeader title="Books" extra={[
        <Button type="primary" icon="plus" key="add_button" onClick={() => openModal()}>New Book</Button>
      ]} />

      <BooksPageContent loading={booksLoading} books={books} openModal={openModal} loadMore={loadMore} />

      <BookModal visible={visible} onCancel={() => closeModal()} book={modalData} />
    </div>
  )
}

export default React.memo(BooksPage)
import React from 'react'
import { PageHeader, Button, message } from 'antd'
import BooksPageContent from './BooksPageContent'
import BookModal from './BookModal'
import useModal from '../hooks/useModal'
import usePagination from '../hooks/usePagination'

const BooksPage = () => {
  const { visible, modalData, openModal, closeModal } = useModal()
  const { page, limit, changePage } = usePagination(4)

  // useQuery
  const books = [
    {
      title: "Title",
      author: {
        id: 1, 
        name: 'Natalia Orose'
      }
    },
    {
      title: "Title",
      author: {
        id: 1, 
        name: 'Natalia Orose'
      }
    }
  ]
  const total = 5
  const booksLoading = false

  const afterSave = () => {
    closeModal()
    message.success('Saved successfully')
    // refetch
}

  return (
    <div className="page">
      <PageHeader title="Books" extra={[
        <Button type="primary" icon="plus" key="add_button" onClick={() => openModal()}>New Book</Button>
      ]} />

      <BooksPageContent
        loading={booksLoading}
        books={books}
        openModal={openModal}
        changePage={changePage}
        pagination={{page, limit, total}}
      />

      <BookModal visible={visible} book={modalData} onCancel={closeModal} afterSave={afterSave}  />
    </div>
  )
}

export default React.memo(BooksPage)
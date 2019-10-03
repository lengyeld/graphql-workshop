import React from 'react'
import { Card, Icon, Modal, message } from 'antd'

const deleteBook = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
      message.success('Deleted successfully')
    }, 1000)
  })
}

const showConfirm = () => {
  Modal.confirm({
    title: 'Are you sure you want to delete this book?',
    onOk: () => deleteBook(),
    onCancel() { },
  });
}

const BookCard = ({ book, openBookModal }) => {
  const description = (
    <div>
      <div>Written by {book.author}</div>
      <div>Released in {book.releaseDate}</div>
    </div>
  )

  return (
    <Card className="book__card" bordered={false} actions={[
      <Icon type="edit" key="edit" onClick={() => openBookModal(book)} />,
      <Icon filled="red" type="delete" key="delete" onClick={() => showConfirm()} />
    ]}>
      <Card.Meta title={book.title} description={description} />
    </Card>
  )
}

export default React.memo(BookCard)
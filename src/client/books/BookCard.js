import React from 'react'
import { Card, Icon, Modal, message } from 'antd'

const BookCard = ({ book, openBookModal }) => {
  const deleteBook = () => {
    // useMutation
    
    Modal.confirm({
      title: 'Are you sure you want to delete this book?',
      onOk: () => {
        // delete book
        message.success('Deleted successfully')
      },
    });
  }

  return (
    <Card className="book__card" bordered={false} actions={[
      <Icon type="edit" key="edit" onClick={() => openBookModal(book)} />,
      <Icon filled="red" type="delete" key="delete" onClick={() => deleteBook()} />
    ]}>
      <Card.Meta title={book.title} description={(<div>Written by {book.author.name}</div>)} />
    </Card>
  )
}

export default React.memo(BookCard)
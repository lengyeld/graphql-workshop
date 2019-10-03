import React from 'react'
import { Modal, Button } from 'antd'

const BookModal = ({ visible, onOk, onCancel, book, loading }) => {
  return (
    <Modal
      title="Book details"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="save" type="primary" loading={loading} onClick={onOk}>
          Save
        </Button>,
      ]}
    >
      {book && (
        <>
          <div>{book.title}</div>
          <div>{book.author}</div>
          <div>{book.releaseDate}</div>
        </>
      )}
    </Modal>
  )
}

export default React.memo(BookModal)
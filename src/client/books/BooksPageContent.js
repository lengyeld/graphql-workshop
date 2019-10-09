import React from 'react'
import { List, Empty, Spin, Pagination } from 'antd'
import BookCard from './BookCard'

const BooksPageContent = ({ loading, books, openModal, changePage, pagination }) => {
  if (loading && !books.length) {
    return (
      <div className="page__content">
        <div className="loading">
          <Spin size={'large'} tip="Loading..." />
        </div>
      </div>
    )
  }

  if (!loading && !books.length) {
    return (
      <div className="page__content">
        <Empty />
      </div>
    )
  }

  if (books.length) {
    return (
      <div className="page__content">
        <div className="books">
          <List
            grid={{
              gutter: 24,
              sm: 1,
              md: 2
            }}
            dataSource={books}
            renderItem={item => (
              <List.Item>
                <BookCard key={item.id} book={item} openBookModal={book => openModal(book)} />
              </List.Item>
            )}
          />
        </div>

        <div className="pagination">
          <Pagination
            current={pagination.page}
            total={pagination.total}
            pageSize={pagination.limit}
            onChange={changePage}
          />
        </div>
      </div>
    )
  }
}

export default React.memo(BooksPageContent)
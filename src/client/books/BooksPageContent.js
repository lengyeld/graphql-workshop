import React from 'react'
import { Button, List, Empty, Spin } from 'antd'
import BookCard from './BookCard'

const BooksPageContent = ({ loading, books, openModal, loadMore }) => {
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
              md: 2,
              lg: 3,
              xl: 4
            }}
            dataSource={books}
            renderItem={item => (
              <List.Item>
                <BookCard key={item.id} book={item} openBookModal={book => openModal(book)} />
              </List.Item>
            )}
          />
        </div>

        <div className="load-more">
          <Button type="primary" icon="arrow-down" size={'large'} loading={loading} onClick={() => loadMore()}>Load More</Button>
        </div>
      </div>
    )
  }
}

export default React.memo(BooksPageContent)
import React from 'react'
import '../styles/base.scss'
import { Layout } from 'antd'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import BooksPage from './books/BooksPage'

const App = () => {
  return (
    <Layout>
      <Router>
        <Sidebar />
        <Layout>
          <Layout.Content>
            <Route exact path="/" component={() => 'DASHBOARD'} />
            <Route path="/books" component={BooksPage} />
            <Route path="/authors" component={() => 'AUTHORS'} />
          </Layout.Content>
        </Layout>
      </Router>
    </Layout>
  )
}

export default App

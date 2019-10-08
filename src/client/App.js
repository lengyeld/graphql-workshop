import React from 'react'
import '../styles/base.scss'
import { Layout } from 'antd'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidebar from './sharedComponents/Sidebar'
import BooksPage from './books/BooksPage'
import DashboardPage from './dashboard/DashboardPage'
import AuthorsPage from './authors/AuthorsPage'

const App = () => {
  return (
    <Router>
      <Layout hasSider>
        <Sidebar />
        <Layout>
          <Layout.Content>
            <Route exact path="/" component={DashboardPage} />
            <Route path="/books" component={BooksPage} />
            <Route path="/authors" component={AuthorsPage} />
          </Layout.Content>
        </Layout>
      </Layout>
    </Router>
  )
}

export default App

import React from 'react'
import '../styles/base.scss'
import { Layout } from 'antd'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidebar from './sharedComponents/Sidebar'
import BooksPage from './books/BooksPage'
import DashboardPage from './dashboard/DashboardPage'
import AuthorsPage from './authors/AuthorsPage'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
})

const App = () => {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  )
}

export default App

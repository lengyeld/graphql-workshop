import React from 'react'
import { Menu, Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import Logo from './Logo'

const Sidebar = ({ location }) => {
  return (
    <Layout.Sider className="sider">
      <Logo />

      <Menu theme="dark" defaultSelectedKeys={['/']} selectedKeys={[location.pathname]}>
        <Menu.Item key="/">
          <Link to="/">
            <Icon type="dashboard" />
            <span>Dashboard</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/books">
          <Link to="/books">
            <Icon type="book" />
            <span>Books</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/authors">
          <Link to="/authors">
            <Icon type="user" />
            <span>Authors</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}

export default withRouter(React.memo(Sidebar))
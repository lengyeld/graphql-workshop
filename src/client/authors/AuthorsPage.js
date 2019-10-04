import React from 'react'
import { PageHeader } from 'antd'

const AuthorsPage = () => {
  return (
    <div className="page">
      <PageHeader title="Authors" />
    </div>
  )
}

export default React.memo(AuthorsPage)
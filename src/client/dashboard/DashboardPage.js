import React from 'react'
import { PageHeader } from 'antd'

const DashboardPage = () => {
  return (
    <div className="page">
      <PageHeader title="Dashboard" />
    </div>
  )
}

export default React.memo(DashboardPage)
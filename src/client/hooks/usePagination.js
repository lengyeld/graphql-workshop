import { useState } from 'react'

const usePagination = (defaultLimit = 10) => {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(defaultLimit)

  const changePage = (newPage) => {
    setPage(newPage)
  }

  const changeLimit = (newLimit) => {
    setLimit(newLimit)
  }

  return {
    page,
    limit,
    changePage,
    changeLimit
  }
}

export default usePagination
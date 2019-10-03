import { useState, useCallback } from "react"

const useModal = () => {
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const openModal = useCallback(data => {
    setVisible(true)
    setData(data)
  }, [])
  const closeModal = useCallback(() => setVisible(false), [])

  return {
    visible,
    modalData: data,
    openModal,
    closeModal,
    modalLoading: loading,
    setModalLoading: setLoading
  }
}

export default useModal
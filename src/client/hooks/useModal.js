import { useState, useCallback } from "react"

const useModal = () => {
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState(null)

  const openModal = useCallback(modalData => {
    setVisible(true)
    setData(modalData)
  }, [])
  const closeModal = useCallback(() => setVisible(false), [])

  return {
    visible,
    modalData: data,
    openModal,
    closeModal
  }
}

export default useModal
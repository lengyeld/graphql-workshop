import React, { useRef, useState } from 'react'
import { Modal, Input, Form, message } from 'antd'
import { Formik } from 'formik'
import * as Yup from 'yup'

const bookSchema = Yup.object().shape(
  {
    title: Yup.string().required('You must provide the title of the book'),
    author: Yup.object().shape({
      name: Yup.string()
    })
  }
)

const BookModal = ({ visible, onCancel, book }) => {
  const [isValid, setIsValid] = useState(false)
  const formRef = useRef()

  // useMutation
  let loading

  const saveBook = () => {
    setTimeout(() => {
      // update book if book.id
      // create book if !book
      message.success('Saved successfully')
    }, 1000)
  }

  return (
    <Modal
      title="Book details"
      destroyOnClose
      visible={visible}
      onOk={() => formRef.current.handleSubmit()}
      onCancel={onCancel}
      okButtonProps={{ disabled: !isValid, loading }}
      okText="Save"
    >
      <Formik
        initialValues={book}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false)
          saveBook(values)
        }}
        ref={formRef}
        validationSchema={bookSchema}
        render={({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isValid
        }) => {
          setIsValid(isValid)
          return (
            <Form onSubmit={handleSubmit}>
              <Form.Item label="Title" help={touched.title ? errors.title : ''} required={true} hasFeedback validateStatus={errors.title && touched.title ? 'error' : ''}>
                <Input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
              </Form.Item>

              <Form.Item label="Author" hasFeedback validateStatus={errors.author && errors.author.name && touched.author ? 'error' : ''}>
                <Input
                  type="text"
                  name="author.name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.author ? values.author.name : null}
                />
              </Form.Item>
            </Form>
          )
        }}
      />
    </Modal>
  )
}

export default React.memo(BookModal)
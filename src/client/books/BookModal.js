import React, { useRef, useState } from 'react'
import { Modal, Input, Form, Select } from 'antd'
import { Formik } from 'formik'
import * as Yup from 'yup'

const bookSchema = Yup.object().shape(
  {
    title: Yup.string().required('You must provide the title of the book'),
    author: Yup.object().shape({
      id: Yup.number()
    })
  }
)

const BookModal = ({ visible, book, onCancel, afterSave  }) => {
  const [isValid, setIsValid] = useState(false)
  const formRef = useRef()

  // useMutation
  let loading

  // useQuery
  const authors = [
    {
      id: 1,
      name: 'Natalia Orose'
    }
  ]

  const saveBook = (values) => {
    // update book if book && book.id
    // create book if !book
    const title = values.title
    const authorId = values.author.id

    console.log(title, authorId)
    afterSave()
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
            <Form onSubmit={handleSubmit} layout="vertical">
              <Form.Item label="Title" help={touched.title ? errors.title : ''} required={true} hasFeedback validateStatus={errors.title && touched.title ? 'error' : ''}>
                <Input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
              </Form.Item>

              <Form.Item label="Author" hasFeedback validateStatus={errors.author && touched.author ? 'error' : ''}>
                <Select
                  name="author.id"
                  // AntD's select doesn't give you the original event
                  // but handleChange expects an event
                  // so as a workaround I give it an event like object
                  // https://github.com/JedWatson/react-select/issues/1631
                  onChange={(value) => {
                    handleChange({target: {value, name: 'author.id'}})
                  }}
                  onBlur={handleBlur}
                  value={values.author ? values.author.id : null}
                  allowClear
                >
                  {authors.map(author => (
                    <Select.Option key={author.id} value={author.id}>{author.name}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Form>
          )
        }}
      />
    </Modal>
  )
}

export default React.memo(BookModal)
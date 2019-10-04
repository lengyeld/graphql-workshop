import React, { useRef, useState } from 'react'
import { Modal, Input, Form } from 'antd'
import { Formik } from 'formik'
import * as Yup from 'yup'

const bookSchema = Yup.object().shape(
  {
    title: Yup.string().required('You must provide the title of the book'),
    author: Yup.string(),
    releaseDate: Yup.number()
  }
)

const BookModal = ({ visible, onOk, onCancel, book, loading }) => {
  const [isValid, setIsValid] = useState(false)
  const formRef = useRef()

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
        initialValues={{ ...book }}
        enableReinitialize
        onSubmit={(values, actions) => {
          actions.setSubmitting(false)
          onOk(values)
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

              <Form.Item label="Author" hasFeedback validateStatus={errors.author && touched.author ? 'error' : ''}>
                <Input
                  type="text"
                  name="author"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.author}
                />
              </Form.Item>

              <Form.Item label="Released In" hasFeedback validateStatus={errors.releaseDate && touched.releaseDate ? 'error' : ''}>
                <Input
                  type="number"
                  name="releaseDate"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.releaseDate}
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
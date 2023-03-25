import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { FormikController } from "FormikController.js"

export const FormikWrapper= () => {
  const choices = [
    { key: "choice a", value: "choicea" },
    { key: "choice b", value: "choiceb" },
  ]

  const initialValues = {
    title: '',
    category: 'homeanddiy',
    price: '',
    condition: 'New',
    description: '',
    location: '',
    phoneNumber: '',
    email: '',
    image: 'image',
  }
  const addSchema = Yup.object({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    category: Yup.string()
      .required('Required'),
    condition: Yup.string()
      .required('Required'),
    description: Yup.string()
      .min(10, 'Too Short!')
      .max(1000, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    location: Yup.string()
      .required('Required'),
    price: Yup.number()
      .integer('Invalid price')
      .required('Required'),
    phoneNumber: Yup.number()
      .integer('Phone number format 085XXXXXXX')
      .required('Required')
  })
  const onSubmit = values => console.log("Form data", values)
  return (
    <Formik
      initialValues={initialValues}
      addSchema={addSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form>
          <FormikController
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikController
            control="textarea"
            label="Description"
            name="description"
          />
          <FormikController
            control="select"
            label="Select your choice"
            name="selectChoice"
            option={choices}
          />
          <FormikController
            control="radio"
            label="Click your choice"
            name="radioChoice"
            option={choices}
          />
          <FormikController
            control="checkbox"
            label="select your choices"
            name="checkBoxChoice"
            option={choices}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}
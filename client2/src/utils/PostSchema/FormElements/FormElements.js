import React from "react"
import { Field, ErrorMessage } from "formik"

export const Title = (props) => {
    const { label, name, ...rest } = props
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <Field as="title" id={name} name={name} {...rest} />
        <ErrorMessage name={name} />
      </div>
    )
};

export const Category = (props) => {
    const { label, name, ...rest } = props
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <Field as="category" id={name} name={name} {...rest} />
        <ErrorMessage name={name} />
      </div>
    )
};

export const Image = (props) => {
    const { label, name, ...rest } = props
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <Field as="image" id={name} name={name} {...rest} />
        <ErrorMessage name={name} />
      </div>
    )
};

export const Price = (props) => {
    const { label, name, ...rest } = props
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <Field as="price" id={name} name={name} {...rest} />
        <ErrorMessage name={name} />
      </div>
    )
};

export const PhoneNumber = (props) => {
    const { label, name, ...rest } = props
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <Field as="phoneNumber" id={name} name={name} {...rest} />
        <ErrorMessage name={name} />
      </div>
    )
};

export const Description = (props) => {
    const { label, name, ...rest } = props
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <Field as="description" id={name} name={name} {...rest} />
        <ErrorMessage name={name} />
      </div>
    )
};

export const Location = (props) => {
    const { label, name, ...rest } = props
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <Field as="location" id={name} name={name} {...rest} />
        <ErrorMessage name={name} />
      </div>
    )
};

export const Email = (props) => {
    const { label, name, ...rest } = props
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <Field as="email" id={name} name={name} {...rest} />
        <ErrorMessage name={name} />
      </div>
    )
};

export const Condition = (props) => {
    const { label, name, ...rest } = props
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <Field as="condition" id={name} name={name} {...rest} />
        <ErrorMessage name={name} />
      </div>
    )
};




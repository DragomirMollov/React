import * as Elements from './FormElements/FormElements'

export const FormikController = (props) => {
  const { control, ...rest } = props
  switch (control) {
    case "title":
      return <Elements.Title {...rest} />
    case "category":
      return <Elements.Category {...rest} />
    case "image":
      return <Elements.Image {...rest} />
    case "price":
      return <Elements.Price {...rest} />
    case "phoneNumber":
      return <Elements.PhoneNumber {...rest} />
    case "description":
      return <Elements.Description {...rest} />
    case "location":
      return <Elements.Location {...rest} />
    case "email":
      return <Elements.Email {...rest} />
    case "condition":
      return <Elements.Condition {...rest} />
    default:
      return null
  };
};
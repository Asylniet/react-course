import React from 'react';
import { FieldProps, useForm } from './useForm'

const fields: FieldProps[] = [
  {
    name: "name",
    label: "Name",
  },
  {
    name: "email",
    label: "Email",
  },
  {
    name: "password",
    label: "Password",
  },
]

type FormProps = {
  isFormVisible: boolean;
}

export const Form: React.FC<FormProps> = ({ isFormVisible }) => {
  const { formState } = useForm(fields);
  
  React.useEffect(() => {
    console.log("Form mounted")
  }, []);
  
  if(!isFormVisible) return null;

  console.log("RENDERED")

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log(formState.getValues());
    }}>
      {formState.fields.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          <input
            type="text"
            value={field.value}
            onChange={field.onChange}
          />
          {field.error && <div>{field.error}</div>}
        </div>
      ))}

      <button type='submit'>
        Submit
      </button>
    </form>
  )
}

export default Form

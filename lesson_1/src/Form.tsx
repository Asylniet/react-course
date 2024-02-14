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

export const Form = () => {
  const { formState } = useForm(fields);
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

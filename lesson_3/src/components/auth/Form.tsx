import React from "react";
import { FieldProps, useForm } from "../../hooks/useForm";
import style from './../../style/style.module.scss'

const fields: FieldProps[] = [
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
    firstInputRef: React.RefObject<HTMLInputElement>
  }
  
  export const Form: React.FC<FormProps> = ({ firstInputRef }) => {
    const { formState } = useForm(fields);

    return (
      <form className={style.form} onSubmit={(e) => {
        e.preventDefault();
        console.log(formState.getValues());
      }}>
        {formState.fields.map((field) => (
          <div key={field.name}>
            <label>{field.label}</label>
            <input
              onFocus={() => console.log("FOCUSED")} 
              ref={firstInputRef}
              type="text"
              value={field.value}
              onChange={field.onChange}
            />
            {field.error && <div>{field.error}</div>}
          </div>
        ))}
  
        <button className={style.button} type='submit'>
          Register
        </button>
      </form>
    )
  }
  
  export default Form
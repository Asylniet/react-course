import React from "react"

type FormState = {
  fields: Field[];
  hasError: boolean;
  getValues: () => any;
}

type Field = {
  name: string,
  label: React.ReactNode,
  isRequired?: boolean,
  value: any,
  error? : string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export type FieldProps = Pick<Field, "name" | "label" | "isRequired">

export const useForm = (_fields: FieldProps[]) => {
  const fields = _fields.map((field) => ({
    ...field,
    value: "",
    error: "",
  }) as Field);
  
  // const fields = _fields.map((field) => {
  //   return {
  //     ...field,
  //     value: "",
  //     error: "",
  //   } as Field
  // })

  const [formState, setFormState] = React.useState<FormState>({
    fields,
    hasError: false,
    getValues: () => {},
  });

  const updatedFields = formState.fields.map((field) => ({
    ...field,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFormState((prev) => ({
        ...prev,
        fields: prev.fields.map((f) => {
          if (f.name === field.name) {
            return {
              ...f,
              value,
            };
          }
          return f;
        }),
      }));
    },
  }));

  return {
    formState: {
      ...formState,
      fields: updatedFields,
      getValues: () => {
        const values: any = {};
        formState.fields.forEach((field) => {
          values[field.name] = field.value;
        });
        return values;
      }
    },
  };
};

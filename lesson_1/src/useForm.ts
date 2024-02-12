// import { useState } from "react"

// type FormState = {
//   fields: Field[];
//   hasError: boolean;
// }

// type Field = FieldProps & {
//   value: any,
//   error? : string,
//   onChange: (e: InputEvent) => void,
// }

// export type FieldProps = {
//   name: string,
//   label: React.ReactNode,
//   isRequired?: boolean,
// }

// export const useForm = (fields: FieldProps[]) => {
//   const _fields = fields.map((field) => {
//     ...field;
//     value: "";
//     error: "";
//     onChange: (e: InputEvent) => value = e.target.value;
//   } as Field);

//   const [formState, setFormState] = useState<FormState>({
//     fields: _fields,
//     hasError: false,
//   });

//   return { formState }
// }
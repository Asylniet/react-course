import { useForm } from "react-hook-form"

type TFormData = {
    email: string;
    password: string;
}

export const LoginPage = () => {
    const {register, handleSubmit} = useForm<TFormData>();
    return(
        <div className="m-5 grid justify-center">
            <h2 className="mx-4">Login Page</h2>
            <form 
            className="mt-3 grid gap-2" 
            onSubmit={handleSubmit((data: TFormData) => {
                console.log(data);
                alert("Login successful!")
            })}>
                <input className="border rounded-md p-2" {...register("email")} name="email" placeholder="email" type="email"/>
                <input className="border rounded-md p-2" {...register("password")} name="password" placeholder="password" type="password"/>
                <button className="border bg-green-700 hover:bg-green-800 text-white rounded-md p-2" type="submit">Submit</button>
            </form>
        </div>
    )
}
import React, {useState, useRef} from 'react';

interface IFormProps {
    onSubmit: (data: { email: string, password: string }) => void;
}

export const Form: React.FC<IFormProps> = ({onSubmit}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const handlerKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter' && passwordInputRef.current !== null){
            passwordInputRef.current.focus();
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ email, password });
    }

    return(
        <form>
            <input ref={emailInputRef} type="email" placeholder='email' value={email} onChange={((e) => setEmail(e.target.value))}/>
            <input ref={passwordInputRef} type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} onKeyUp={handlerKeyUp}/>
            <button onSubmit={handleSubmit} type="submit">login</button>
        </form>
    )
}
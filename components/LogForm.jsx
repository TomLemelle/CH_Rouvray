import React, { useState, useReducer } from 'react'


export default function Register({ onSubmit }) {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');

    return (
        <Form 
            onSubmit={e => {
                handleSubmit(email, username, password, repeatedPassword);
                e.preventDefault();
            }}
            className='log-form'>
                <ul className="inputs-list">
                    <li><InputField type='email' name='email' placeholder='Email' value={email} onChange={setEmail} /></li>
                    <li><InputField type='text' name='username' placeholder="Nom d'utilisateur" value={username} onChange={setUsername} /></li>
                    <li><InputField type='password' name='password' placeholder='Mot de passe' value={password} onChange={setPassword, console.log(this)} /></li>
                    <li><InputField type='password' name='repeatedPassword' placeholder='Confirmer votre mot de passe' value={repeatedPassword} onChange={setRepeatedPassword} /></li>
                    <Button type='submit'>S'inscrire</Button>
                </ul>
        </Form>
    )
};

const Form = ({ onSubmit, children}) => (
    <form onSubmit={onSubmit}>{children}</form>
)

const Button = ({ onClick, type = 'button', children }) => (
    <button type={type} onClick={onClick}>
        {children}
    </button>
);

const InputField = ({value, type, onChange, name, placeholder}) => (
    <input 
        type={type}
        value={value}
        name={name}
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder}
    />
);

const handleSubmit = (email, username, password, repeatedPassword) => {
    console.log(email, username, password, repeatedPassword, checkPassword(password, repeatedPassword));
    if(checkPassword(password, repeatedPassword)) {
        return {
            email: email,
            username: username,
            password: password,
            repeatedPassword: repeatedPassword,
        }
    } else console.log( 'Les mots de passes ne correspondent pas !' );
}

const checkPassword = (password, repeatedPassword) => {
    return password.toString() === repeatedPassword ? true : false;
}

const checkPasswordLength = (password) => {
    
}
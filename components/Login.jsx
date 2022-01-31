import { forwardRef, useState, useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { login } from '../services/AuthApi'
import Auth from "../context/Auth"
import { useRouter } from 'next/router'

const Login = (props, ref) => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const {isAuthenticated, setIsAuthenticated} = useContext(Auth);
    const router = useRouter()

    const onSubmit = async data => {
        try {
            const response = await login(data)
            setIsAuthenticated(response);
            router.push('/profile')
        } catch ({ response }) {
            console.log(response)
        }
    }

    useEffect(() => {
        router.prefetch('/profile')
    })

    return (
        <form className='form-wrapper' onSubmit={handleSubmit(onSubmit)}>

            {props.children}

            <div className='google-field'>
                <a href="#"><img src='google-icon.png' alt='google icon' style={{ paddingRight: '5px' }} />Continuer avec google</a>
            </div>

            <div className='ou-field'>ou</div>

            <input 
                {...register('email', { required: 'Ce champ est obligatoire'})}
                placeholder='Email'
                className='form-fields'
            />
            <input 
                {...register('password', { required: 'Ce champ est obligatoire', minLength: { value: 6, message: 'La taille minimale est de 6'}, maxLength: { value: 30, message: 'La taille maximale est de 30'} })}
                type="password"
                placeholder='Mot de passe'
                className='form-fields'
            />
            <button type='submit' className='form-submit-field'>Se connecter</button>
            <button type='button' ref={ref} className='form-account-field' name='login' onClick={props.onClick}>Créer un compte</button>
        </form>
    )
}

export default forwardRef(Login);
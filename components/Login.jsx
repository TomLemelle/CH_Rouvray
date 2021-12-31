import React from 'react'
import { useForm } from 'react-hook-form'

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)

    console.log(errors)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                {...register('email', { required: 'Ce champ est obligatoire'})}
                placeholder='Email'
                className='form-fields'
            />
            <input 
                {...register('password', { required: 'Ce champ est obligatoire', minLength: { value: 6, message: 'La taille minimale est de 6'}, maxLength: { value: 30, message: 'La taille maximale est de 30'} })}
                placeholder='Mot de passe'
                className='form-fields'
            />
            <button type='submit' className='form-button-fields'>Se connecter</button>
        </form>
    )
}

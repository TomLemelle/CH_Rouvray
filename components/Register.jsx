import React from 'react'
import { useForm } from 'react-hook-form'

export default function Register() {

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
                {...register('username', { required: 'Ce champ est obligatoire', minLength: { value: 4, message: 'La taille minimale est de 4'}, maxLength: { value: 20, message: 'La taille maximale est de 20'} })}
                placeholder="Nom d'utilisateur"
                className='form-fields'
            />
            <input 
                {...register('password', { required: 'Ce champ est obligatoire', minLength: { value: 6, message: 'La taille minimale est de 6'}, maxLength: { value: 30, message: 'La taille maximale est de 30'} })}
                placeholder='Mot de passe'
                className='form-fields'
            />
            <input 
                {...register('repeatedPassword', { required: 'Ce champ est obligatoire', minLength: { value: 6, message: 'La taille minimale est de 6'}, maxLength: { value: 30, message: 'La taille maximale est de 30'} })}
                placeholder='Confirmer votre mot de passe'
                className='form-fields'
            />
            <button type='submit' className='form-button-fields'>S'inscrire</button>
        </form>
    )
}

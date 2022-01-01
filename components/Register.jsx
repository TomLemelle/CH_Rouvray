import { forwardRef } from 'react'
import { useForm } from 'react-hook-form'
import { useRef } from 'react/cjs/react.development'

const Register = (props, ref) => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <form className='form-wrapper' onSubmit={handleSubmit(onSubmit)}>

            {props.children}

            <div className='google-field'>
                <a href="#"><img src='google-icon.png' alt='google icon' style={{ paddingRight: '5px' }} />Continuer avec google</a>
            </div>

            <div className='ou-field'>ou</div>

            <input 
                {...register('email', { required: 'Ce champ est obligatoire' })}
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
            <button type='submit' className='form-submit-field'>S&apos;inscrire</button>
            <button type='button' ref={ref} className='form-existing-account-field' name='register' onClick={props.onClick}>Se connecter avec un compte existant</button>
        </form>
    )
}

export default forwardRef(Register)

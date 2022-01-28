import { forwardRef, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRef } from 'react/cjs/react.development'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

const Register = ({children, onClick}, ref) => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => {
        setEmail(data.email)
        setFirstName(data.firstname)
        setLastName(data.lastname)
        setPassword(data.password)
        setRepeatedPassword(data.repeatedPassword)
        console.log(data);
    }

    const [wrongPassword, setWrongPassword] = useState(false)

    const checkSamePassword = () => {
        return password === repeatedPassword ? true : false
    }

    const handleRegister = () => {

        if(checkSamePassword()) {
            setWrongPassword(false)
            signIn('credentials', 
                {
                    email,
                    firstName,
                    lastName,
                    password,
                    callbackUrl: `${window.location.origin}/upload`
                }
            )
        } else setWrongPassword(true)

        
    }

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')
    const [loginError, setLoginError] = useState('')
    const router = useRouter()

    useEffect(() => {
        if(router.query.error) {
            setLoginError(router.query.error)
            setEmail(router.query.email)
        }
    }, [router])


    return (
        <form className='form-wrapper' onSubmit={handleRegister}>

            {children}

            <div className='google-field' onClick={() => signIn()}>
                <button href="#"><img src='google-icon.png' alt='google icon' style={{ paddingRight: '5px' }} />Continuer avec google</button>
            </div>


            <div className='ou-field'>ou</div>

            <input 
                {...register('email', { required: 'Ce champ est obligatoire' })}
                placeholder='Email'
                className='form-fields'
            />
            <input 
                {...register('firstname', { required: 'Ce champ est obligatoire', minLength: { value: 2, message: 'La taille minimale est de 4'}, maxLength: { value: 20, message: 'La taille maximale est de 20'} })}
                placeholder="Votre prénom"
                className='form-fields'
            />

            <input 
                {...register('lastname', { required: 'Ce champ est obligatoire', minLength: { value: 2, message: 'La taille minimale est de 4'}, maxLength: { value: 30, message: 'La taille maximale est de 30'} })}
                placeholder="Votre nom de famille"
                className='form-fields'
            />

            <input 
                {...register('password', { required: 'Ce champ est obligatoire', minLength: { value: 6, message: 'La taille minimale est de 6'}, maxLength: { value: 30, message: 'La taille maximale est de 30'} })}
                placeholder='Mot de passe'
                className='form-fields'
                type='password'
            />
            <input 
                {...register('repeatedPassword', { required: 'Ce champ est obligatoire', minLength: { value: 6, message: 'La taille minimale est de 6'}, maxLength: { value: 30, message: 'La taille maximale est de 30'} })}
                placeholder='Confirmer votre mot de passe'
                className='form-fields'
                type='password'
            />
            { wrongPassword && <span>Les mots de passe sont différents</span> }
            
            <button type='submit' className='form-submit-field'>S&apos;inscrire</button>
            <button type='button' ref={ref} className='form-account-field' name='register' onClick={onClick}>Se connecter avec un compte existant</button>
        </form>
    )
}

export default forwardRef(Register)

import { forwardRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { login } from '../services/AuthApi'

const Login = (props, ref) => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [user, setUser] = useState({
        username: "",
        password: "",
    })

    const handleChange = ({currentTarget}) => {
        const { name, value } = currentTarget
        setUser({...user, [name]: value})
    }

    const onSubmit = async () => {
        try {
            console.log(user);
            const response = await login(user)
            history.replace('/upload')
            toast.success('Bienvenue ! :)')
        } catch ({ response }) {
            toast.error("L'email ou le mot de passe est incorrect. Veuillez réessayer ! ;)")
            console.log(response)
        }
    }

    return (
        <form className='form-wrapper' onSubmit={handleSubmit(onSubmit)}>

            {props.children}

            <div className='google-field'>
                <a href="#"><img src='google-icon.png' alt='google icon' style={{ paddingRight: '5px' }} />Continuer avec google</a>
            </div>

            <div className='ou-field'>ou</div>

            <input 
                {...register('username', { required: 'Ce champ est obligatoire'})}
                placeholder='Email'
                className='form-fields'
                onChange={handleChange}
            />
            <input 
                {...register('password', { required: 'Ce champ est obligatoire', minLength: { value: 6, message: 'La taille minimale est de 6'}, maxLength: { value: 30, message: 'La taille maximale est de 30'} })}
                placeholder='Mot de passe'
                className='form-fields'
                onChange={handleChange}
            />
            <button type='submit' className='form-submit-field'>Se connecter</button>
            <button type='button' ref={ref} className='form-account-field' name='login' onClick={props.onClick}>Créer un compte</button>
        </form>
    )
}

export default forwardRef(Login);
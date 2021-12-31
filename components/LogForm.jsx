import React from 'react'
import { useForm } from 'react-hook-form'

export default function LogForm() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)

    console.log(watch('example'))

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue='test' {...register('exemple')} />
            <input {...register('exampleRequired', { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}

            <input type='submit' />
        </form>
    )
}

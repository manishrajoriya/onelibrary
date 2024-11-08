import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { memberSchema } from '@/lib/formValidationSchema'

type Inputs = {
  example: string
  exampleRequired: string
}

export default function studentForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)}>
         <input defaultValue="hello" {...register("example")} />
         <input {...register("exampleRequired"), { required: true} }  />
         {errors.exampleRequired && <span>This field is required</span>}
         <input type="submit" />
       </form>
    </div>
  )
}

